import { getDogService } from "@/service/product.service";


const DogPage = async() => {
    //calling getDog  from service
    const dogImage = await getDogService();

    return ( 
        <main>
            <h1>Dog image</h1>
            <img 
            className="rounded-2xl p-2" 
            src={dogImage.message}
            alt="dog" 
            width={400}/>

        </main>
     ); 
}
 
export default DogPage;