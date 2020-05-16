export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Production-Ready Microservices",
      author: "Susan J. Fowler",
      bookDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae architecto, fugiat deserunt repellat modi, tempora exercitationem, tempore cumque dolorem molestiae hic quasi blanditiis offici perferendis. Suscipit culpa reiciendis blanditiis fugit.",
      price: 32,
      yearWritten: "2020",
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"
    },
    {
      id: 2,
      title: "Release It!",
      author: "Michael T. Nygard",
      bookDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae architecto, fugiat deserunt repellat modi, tempora exercitationem, tempore cumque dolorem molestiae hic quasi blanditiis offici perferendis. Suscipit culpa reiciendis blanditiis fugit.",
      price: 45,
      yearWritten: "2019",
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"
    }
  ];

  okCheck() {
    console.log("ok");
  }
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if (Math.random() > 0.75) {
        //   reject(new Error("Something went wrong"));
        // }
        resolve(this.data);
      }, 3000);
    });
  }
}
