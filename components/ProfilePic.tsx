import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useSpring, animated, config } from "react-spring";

const ProfilePic = () => {
  const props = useSpring({
    loop: false,
    from: { rotateZ: -80, height: 0, width: 0 },
    to: { rotateZ: 0, height: 300, width: 300 },
    config: { ...config.gentle },
    delay: 300,
  });
  // const ProfileImg = () => (
  //   <Image
  //   />
  // );
  return (
    <animated.div style={props}>
      <Image
        alt="Phil Welsh profile picture"
        src="https://res.cloudinary.com/philwelsh/image/upload/v1644184675/philwelsh.com/site-images/1566443404196_ejxauh.jpg"
        // src="https://image-component.nextjs.gallery/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmountains.a2eb1d50.jpg&w=750&q=75"
        layout="fill"
      />
    </animated.div>
  );
};

export default ProfilePic;

// <div className={styles.profilePicContainer}>
// </div>
