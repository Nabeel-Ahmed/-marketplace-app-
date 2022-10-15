import type { NextPage } from "next";
import { gql, useQuery } from "@apollo/client";
import ProductList from "../components/ProductList";

const GET_PRODUCTS = gql`
  query {
    getAllProducts {
      data {
        _id
        name
        description
        price
        imageUrl
        shop {
          _id
        }
      }
    }
  }
`;

const Home: NextPage = () => {
  // useEffect(() => {
  // }, [third])

  const { data, loading } = useQuery(GET_PRODUCTS);

  console.log("=s=>", data?.getAllProducts?.data);

  if (loading) return <p>Loading...</p>;

  // const products = data.getAllProducts.data;
  return (
    <>
      <ProductList products={data.getAllProducts.data} />
      {/* <ProductList products={[1, 2, 3, 4]} /> */}
    </>
  );
};

export default Home;
