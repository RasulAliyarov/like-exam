import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Home.scss"

const PRACTISE_CARD = [
  {
    h2: "Lorem, ipsum.",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eos."
  },
  {
    h2: "Lorem, ipsum.",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eos."
  },
  {
    h2: "Lorem, ipsum.",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eos."
  },
  {
    h2: "Lorem, ipsum.",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eos."
  },
  {
    h2: "Lorem, ipsum.",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eos."
  },
  {
    h2: "Lorem, ipsum.",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eos."
  },
]

function Home() {
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/api/customers").then(res => {
      setData(res.data)
      console.log(res.data)
    })
  }, [])


  console.log(data)

  return (
    <>
      <div  className="home">
        <div className="home__background">
          <div className="home__background__text container">
            <h1>Notary Public &</h1>
            <h1 className='legalH1'>Legal Solutions</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime culpa fugiat architecto placeat et nam, doloribus eaque delectus aliquam eos veritatis exercitationem sunt repellendus. Eaque?</p>
          </div>
        </div>

        <div className="home__practice">
          <div className="home__practice__wrapper container">
            <div className="home__practice__wrapper__title">
              <h3>Practice <span>Areas</span></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="home__practice__wrapper__cards">
              {
                PRACTISE_CARD.map((card, index) => {
                  return (
                    <div key={index} className="home__practice__wrapper__cards__card">
                      <div>
                        <span></span>
                      </div>
                      <h2>{card.h2}</h2>
                      <p>{card.p}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className="home__appoitment">
          <div className="home__appoitment__wrapper container">

            <div className="home__appoitment__wrapper__left">
              <img src="https://images.unsplash.com/photo-1541535881962-3bb380b08458?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80" alt="" />
            </div>
            <div className="home__appoitment__wrapper__middle">
              <img src="https://images.unsplash.com/photo-1573496782432-8690d8148c46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
            </div>
            <div className="home__appoitment__wrapper__right">
              <h1>We Provide Highly <span>Reliable</span></h1>
              <h1><span>Effective</span> Legal Solutions</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque culpa quisquam incidunt explicabo cum sunt quis. Saepe perspiciatis doloremque autem quae voluptate enim iste, hic eos porro corporis qui rem recusandae voluptatibus atque, odit quod dicta? Unde, facere voluptatem.</p>
              <button>Book an appointment</button>
            </div>
          </div>
        </div>

        <div className="home__customers">
          <div className="home__customers__wrapper">
            <div className="home__customers__wrapper__title">
              <h3>Happy Customers</h3>
            </div>

            <div className="home__customers__wrapper__customersCards ">
              {
                data.map(value => {
                  return (
                    <div key={value._id} className="home__customers__wrapper__customersCards__customerCard">
                      <div className='home__customers__wrapper__customersCards__customerCard__top'>
                        <div className='customerImg'><img src="https://images.unsplash.com/photo-1468488718849-422a2a5efc03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" /></div>
                        <div className='info'>
                          <h4>{value.name}</h4>
                          <span>{value.city}</span>
                        </div>
                      </div>
                      <div className="home__customers__wrapper__customersCards__customerCard__bottom">
                        <p>{value.desc}</p>
                        <button onClick={() => {
                          axios.delete(`http://localhost:8080/api/customers/${value._id}`)
                        }}>Delete</button>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>


        <div className="home__register">
          <div className="home__register__wrapper container ">

            <div className="home__register__wrapper__left">
              <img src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            </div>
            <div className="home__register__wrapper__middle">
              <h1> We have <span>Legal Solutions</span></h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In voluptas accusamus cum commodi laudantium. Iure tenetur eos excepturi voluptatibus a commodi provident exercitationem doloremque dolores fugit. Optio expedita sit nihil dolore.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, optio ipsam nulla itaque aliquam distinctio repellendus, magnam fuga in porro harum, totam dolorum laboriosam temporibus suscipit nemo iure! A, minus rem ad perspiciatis modi. </p>
              <ul>
                <li>✔ Aperiam iste nam molsestias</li>
                <li>✔ Modi perfendis ipsa</li>
                <li>✔ Perspic iste cupla</li>
              </ul>
            </div>
            <div className="home__register__wrapper__right">

              <div className='home__register__wrapper__right__block'>
                <div className="home__register__wrapper__right__block__content">

                  <div className="home__register__wrapper__right__block__content__top">
                    How to download and register?
                  </div>
                  <div className='home__register__wrapper__right__block__content__text'>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis minima pariatur quia quaerat voluptatem obcaecati eius dolorum. Earum exercitationem, blanditiis voluptas dicta aperiam eum sunt, facilis numquam impedit quas quod quis repellat porro iusto delectus eos! Tenetur, ullam cum non ipsum atque nesciunt sed deserunt animi qui cumque possimus quo laborum nihil mollitia ex ipsa! Ex laboriosam temporibus mollitia ullam!</p>

                  </div>
                </div>

              </div>

              <div className='home__register__wrapper__right__block'>
                <div className="home__register__wrapper__right__block__top">
                  How to create your paypal acount?
                </div>
              </div>

              <div className='home__register__wrapper__right__block'>
                <div className="home__register__wrapper__right__block__top">
                  How to link your paypal and bank acount?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home