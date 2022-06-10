import React from "react";
import Link from "next/link";
import Card from "../components/Card";
import Container from "../components/Container";
import Product from "../models/Product";
import mongoose, { mongo } from "mongoose";
export default function Tshirt({ products }) {
  return (
    <div>
      <Container>
        {/* {tshirt.map((item) => {
          return <Card src={item.src} key={item.slug} />;
        })} */}
        {Object.keys(products).map((item) => {
          return (
            <Card
              key={products[item].slug}
              title={products[item].title}
              src={products[item].img}
              desc={products[item].desc}
              slug={products[item].slug}
              category={products[item].category}
              size={products[item].size}
              price={products[item].price}
              color={products[item].color}
            />
          );
        })}
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO);
  }
  let products = await Product.find({ category: "tshirt" });
  let tshirts = {};
  for (let item of products) {
    if (item.title in tshirts) {
      if (
        !tshirts[item.title].color?.includes(item.color) &&
        item.availableQty > 0
      ) {
        await tshirts[item.title].color.push(item.color);
      }
      if (
        !tshirts[item.title].size?.includes(item.size) &&
        item.availableQty > 0
      ) {
        await tshirts[item.title].size.push(item.size);
      }
    } else {
      tshirts[item.title] = await JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        tshirts[item.title].color = [item.color];
        tshirts[item.title].size = [item.size];
      }
    }
  }
  // const resp = await fetch("http://localhost:3000/api/getproducts");
  // const products = await resp.json();
  return {
    props: { products: JSON.parse(JSON.stringify(tshirts)) }, // will be passed to the page component as props
  };
}
