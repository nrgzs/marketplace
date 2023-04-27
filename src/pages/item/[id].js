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
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
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
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  const data = products.filter((item) => context.params.id == item.id);

  return {
    props: {
      data: data[0],
    },
  };
}
