const formEntryClassNames = {
  form: "m-auto flex flex-col w-[80%] max-w-[600px]  p-5",
  labels:
    "flex gap-2 flex-col laptop:flex-row m-auto w-full p-2 align-center justify-between  ",
  spans: "flex-[2] text-center laptop:text-left m-auto",
  inputs:
    "flex-[4] sign-in-input w-full py-3 px-4 rounded outline-none text-red ",
  button:
    "py-2 px-5 rounded w-max ml-auto mr-2 mt-5 bg-white text-black outline-none hover:bg-blue-900 hover:text-white duration-300 ease-in-out",
};

export default {
  formEntryClassNames,
};
