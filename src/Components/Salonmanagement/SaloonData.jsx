import SaloonSeat from '../../assets/Homebanner3.jpg';
import Shop from '../../assets/home3.jpg';
import Cutting from '../../assets/Reports.jpg';


export const Data=[
    {

img:SaloonSeat,
heading2:"Streamline Appointment Booking",
text: (
    <div>
      <span style={{ fontSize:"22px",fontWeight:"bold",display:"inline-block",marginBottom:"15px"}}>
        Experience effortless appointment management with AppoinitimiZe!
      </span><br/>
      {" "}Transform your business's scheduling with AppoinitimiZe! Our intuitive system minimizes no-shows and double bookings, ensuring a seamless experience for both staff and clients. Boost efficiency, keep your calendar full, and focus on delivering exceptional service hassle-free!
    </div>
  )
},
{
    class:"row-reverse",
    img:Shop,
    heading2:"Efficient Staff Management",
    text:
    (
        <div>
          <span style={{ fontSize:"20px",fontWeight:"bold",display:"inline-block",marginBottom:"15px"}}>
    Revolutionize your business’s workforce management with AppoinitimiZe!   </span><br/>Streamline staff scheduling, assignments, and performance tracking with AppoinitimiZe. Elevate productivity, foster team collaboration, and exceed client expectations effortlessly. Try AppoinitimiZe for seamless, efficient, and dynamic staff management today!
  
    </div>
    )
    },
{
    img:Cutting,
    heading2:"Detailed Reporting and Analytics",
    text:
    (
      <div>
        <span style={{ fontSize:"19px",fontWeight:"bold",display:"inline-block",marginBottom:"15px"}}>Elevate your business with AppoinitimiZe's game-changing Reporting and Analytics!
        </span><br/>Transform your business's performance with AppoinitimiZe's powerful reporting and analytics. Track metrics, spot trends, and drive efficiency with data-driven decisions. Visualize growth, pinpoint improvements, and stay ahead in the competitive business industry.
    </div>
    )
    }
]