import quoteIcon from "./icon.svg"


export default function Testimonial({avatar, text, author, authorPosition, containerStyle}){

    return(
        <section className="testimonial" style={containerStyle}>
            <img className="testimonial-avatar" src={avatar} alt="avatar" />
            <div>
                <img className="testimonial-quote-icon" src={quoteIcon} alt="quote icon" />
                <p className="testimonial-text">{text}</p>
                <p className="testimonial-author">{author}</p>
                <p className="testimonial-author-position">{authorPosition}</p>
            </div>
        </section>
    )
}