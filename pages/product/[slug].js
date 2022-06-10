import mongoose, { mongo } from "mongoose";
import { useRouter } from "next/router";
import ProductPage from "../../components/ProductPage";
import Product from "../../models/Product";

const Slug = ({ addToCart, product, varients, buyNow }) => {
  // console.log(products);
  console.log(product, varients);
  const router = useRouter();
  const { slug } = router.query;

  return (
    <ProductPage
      buyNow={buyNow}
      name={slug}
      addToCart={addToCart}
      varients={varients}
      product={product}
    />
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO);
  }

  let product = await Product.findOne({ slug: context.query.slug });
  let varients = await Product.find({ title: product.title });

  let colorSizeSlug = {};
  for (let item of varients) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = item.slug;
    } else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = item.slug;
    }
  }
  console.log(colorSizeSlug);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      varients: JSON.parse(JSON.stringify(colorSizeSlug)),
    }, // will be passed to the page component as props
  };
}

export default Slug;
