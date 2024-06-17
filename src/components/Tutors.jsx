
import '../styles/Tutors.css'

function Tutors(props) {
    return (
        <div className="tutor-list">
            {
                props.TutorsList.map((item,index) => {
                    return (
                        <div className='kartu-tutor' key={index}>
                            <img src={item.Image}/>
                            <p>{item.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tutors
