import './scss/main.scss'

const list = [
  {
    title: 'Animais',
    img: 'animais',
  },{
    title: 'Arquitetura',
    img: 'arquitetura',
  },{
    title: 'Cidades',
    img: 'cidade',
  },{
    title: 'Decorações',
    img: 'decoracao',
  },{
    title: 'Esportes',
    img: 'esportes',
  },{
    title: 'Natureza',
    img: 'natureza',
  },{
    title: 'Paisagem',
    img: 'paisagem',
  },{
    title: 'Pessoas',
    img: 'pessoas',
  },{
    title: 'Refeições',
    img: 'refeicoes',
  },
]

export default function Main(){
  return(
    <main>
      <ul className="list">

        { list.map((item, i) => {
          return(
            <li>
              <img src={`/assets/imgs/${item.img}.jpg`} alt="img" />
              <h3>{item.title}</h3>
              <button>MAIS FOTOS</button>
            </li>
          )
        }) }

      </ul>
    </main>
  )
}
