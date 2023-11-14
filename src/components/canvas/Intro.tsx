// body {
//   width: 100vw;
//   height: 100vh;
//   overflow: hidden;
//   padding: 0;
//   margin: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   perspective: 500px;
//   background: linear-gradient(180deg, #05f, #09f);
// }

// .container {
//   width: 150px;
//   height: 150px;
//   display: flex;
//   place-content: center;
//   overflow: hidden;
//   background: rgba(255, 255, 255, 0.2);
//   border-radius: 30px;
// }

// .item {
//   width: 56%;
//   overflow: visible;
//   stroke: #fff;
//   stroke-width: 2;
// }

import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "#915eff",
  },
};
const icon2 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "#facc15",
  },
};

const Intro = () => (
  <div className="container">
    <motion.svg
      className="item"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 135.99 135.99"
    >
      <motion.path
        d="m121.04,110.54c-12.46,15.52-31.59,25.45-53.04,25.45C30.44,135.99,0,105.55,0,68c0-2.47.13-4.9.39-7.3.45-4.24,1.29-8.35,2.49-12.32C11.29,20.39,37.26,0,67.99,0c21.43,0,40.54,9.91,53,25.4l-1.21.48-2.86,1.14-.75.3-8.91,3.57-.54.22c-9.96-10.83-24.24-17.61-40.12-17.61-24.86,0-45.84,16.65-52.38,39.41-1.15,3.99-1.85,8.18-2.05,12.49-.04.86-.06,1.73-.06,2.6,0,30.1,24.4,54.5,54.5,54.5,15.89,0,30.19-6.8,40.15-17.65l.53.21.73.29,13.01,5.19Z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { delay: 2, duration: 2, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.g>
        <motion.path
          d="m80.36,56.64l-28.38,11.32,28.33,11.3,9.33,3.72,7.39,2.95,1.74.7,25.75,10.27,3.96,1.58v.63c-1.84,3.57-3.99,6.96-6.41,10.13l-13.37-5.33-.07-.03-.73-.29-25.55-10.31-.65-.26-1.24-.5-16.62-6.71-28.11-11.35-11.72-4.73v-3.7l11.51-4.61,28.31-11.35,16.64-6.67,22.75-9.12,4.65-1.87,8.91-3.57.33-.13.43-.17,2.57-1.02h0l1.93-.77,1.31,2.06,5.14,8.12v.56l-18.1,7.22-13.33,5.32h0s-9.62,3.84-9.62,3.84l-7.06,2.81Z"
          variants={icon2}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="m80.36,56.64l-28.38,11.32,28.33,11.3,9.33,3.72,7.39,2.95,1.74.7,25.75,10.27,3.96,1.43v.78c-1.84,3.57-3.99,6.96-6.41,10.13l-13.37-5.33-.07-.03-.73-.29s0,0,0,0l-25.55-10.31-.65-.26-1.24-.5-16.62-6.71-28.11-11.35-11.72-4.73v-3.7l11.51-4.61,28.31-11.35,16.64-6.67,22.75-9.12,4.65-1.87,8.91-3.57.33-.13.43-.17,2.56-1.03,1.94-.78h0s1.31,2.07,1.31,2.07l5.14,8.12v.56l-18.1,7.22-13.33,5.32h0s-9.62,3.84-9.62,3.84l-7.06,2.81Z"
          variants={icon2}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="m135.99,68c0,.84-.01,1.67-.05,2.5l-10.45,4.14-26.3,10.43-16.72-6.67,26.3-10.43-26.25-10.47,15.07-6.01h0s1.6-.64,1.6-.64l16.43,6.59,9.79,3.93,10.53,4.22c.03.8.04,1.6.04,2.4Z"
          variants={icon2}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { delay: 2, duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.g>
    </motion.svg>
  </div>
);

export default Intro;
