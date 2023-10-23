import Marquee from "react-fast-marquee"

const marque = () => {
  return (
    <div className="bg-blue-200 p-1">
      <Marquee
          gradient={true}
          gradientColor={[26, 140, 184]}
          pauseOnHover={true}
        >
          <span className="inline-block h-6 w-9">
            <img src="https://www.lordbuddhagroup.com/wp-content/uploads/2018/08/NEW-GIF.gif" alt="" />
          </span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eaque.
          <span className="inline-block h-6 w-9">
            <img src="https://www.lordbuddhagroup.com/wp-content/uploads/2018/08/NEW-GIF.gif" alt="" />
          </span>
        </Marquee>
    </div>
  )
}

export default marque
