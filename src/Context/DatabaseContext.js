// import { db } from "./firebaseConfig";
// import { collection, getDocs } from "firebase/firestore";

// const appsCollectionRef = collection(db, "Job-Applications");

// const [jobApps, setJobApps] = useState([]);

// useEffect(() => {
//   const getApps = async () => {
//     const data = await getDocs(appsCollectionRef);
//     setJobApps(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     console.log(data.docs);
//   };
//   getApps();
// }, []);
