import { CustomSlick } from "../../components"

const images = [{
  id: 1,
  url: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
}, {
  id: 2,
  url: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
}, {
  id: 3,
  url: 'https://cdn.pixabay.com/index/2024/03/01/04-15-28-91_1440x550.jpg'
}
]

const Home = () => {
  return (
    <div className="w-full flex justify-end items-center pt-7">
      <div className="w-[77%] h-[500px] rounded-xl overflow-hidden me-14">
        <CustomSlick images={images} dots={true} infinity={true}/>
      </div>
    </div>
  )
}

export default Home
