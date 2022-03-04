export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/aleatorio')
  const data = await res.json()

  return {
    revalidate: 10,
    props: {
      data
    }
  }
}

const Estatico = props => {
  console.log(props.data)

  return (
    <div>
      <h1>Conteúdo Estático</h1>
      <h2>Último valor: {props.data.valor}</h2>
    </div>
  )
}

export default Estatico