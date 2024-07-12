import './index.css'




const Portfolio = () =>{
return(
<div className='container'>
<div>
    <h2 className='heading'> Resume Portfolio</h2>
</div>
<div className='threeportraits'>
    <div className='profileone'>
   <img src="/image/eshe.png" alt='headshot' className='portrait'></img>
   <p>Eshe Aziz</p>
   <button><a href='https://myresume-eight-lac.vercel.app/' className='viewbutton'>View</a></button>
   </div>
   <div className='profiletwo'>
   <img src='/image/nyambura.png' alt='headshot' className='portrait'></img>
   <p>Faith Nyambura</p>
   <button><a href='https://folio-ochre.vercel.app/' className='viewbutton'>View</a></button>
   </div>
   <div className='profilethree'>
   <img src='/image/shimwe.png' alt='headshot' className='portrait'></img>
   <p>Nancy Shimwe</p>
   <button><a href='https://resume-seven-umber.vercel.app' className='viewbutton'>View</a></button>
   </div>
</div>
<div className='lasttwoportraits'>
   <div className='profilefour'>
   <img src='/image/funani.png' alt='headshot' className='portrait'></img>
   <p>Rehema Funani</p>
   <button><a href='https://portfolio-sand-xi-33.vercel.app/' className='viewbutton'>View</a></button>
   </div>
   <div className='profilefive'>
   <img src='/image/Oyelaaa.png' alt='headshot' className='portrait1' ></img>
   <p>Eyvone Annet Oyella</p>
   <button><a href='public/cv/_Oyella--CV (2).pdf' className='viewbutton'>View</a></button>
   </div>
   </div>
</div>
)
}
export default Portfolio;