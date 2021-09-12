import './Blog.css';
import g1 from '../../icons/star.png'

const BProcess = (props) => {
    const { date, react, comment, desc, img } = props.blog;
    return (
        <div className="my-5 mx-auto col-md-3">
            <div class="card border border-white text-light" style={{ width: "18rem", borderRadius: "0" }}>
                <img class="card-img-top" src={img} alt="Card image cap" />
                <div class="card-body pb-5">
                    <h6 className="">Hello</h6>
                    <p class="card-text text-justify desc">{desc.substr(0, 100)} ...</p>
                    <div className="d-flex justify-content-around react">
                        <div className="d-flex">
                            <i class="fas fa-calendar-day mx-2"></i>
                            <small>{date}</small>
                        </div>
                        <div className="d-flex">
                            <i class="fas fa-heart mx-2"></i>
                            <small>{react}</small>
                        </div>
                        <div className="d-flex">
                            <i class="fas fa-comment-alt mx-2"></i>
                            <small>{comment}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BProcess;