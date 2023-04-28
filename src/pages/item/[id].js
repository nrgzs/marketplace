import axios from 'axios';

export default function Item({ data }) {
  return (
    <>
      <h2 className="info-title">{data.title}</h2>
      <div className="info-container">
        <img
          className="info-img"
          src={data.image}
          width={400}
          height={400}
          alt="img"
        ></img>
        <p className="info-desc">{data.description}</p>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const products = (await axios.get('https://fakestoreapi.com/products')).data;

  const id = products.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });

  return {
    paths: id,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const products = (await axios.get('https://fakestoreapi.com/products')).data;

  const data = products.filter((item) => context.params.id == item.id);

  return {
    props: {
      data: data[0],
    },
  };
}
