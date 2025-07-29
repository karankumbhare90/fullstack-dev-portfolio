import parse from 'html-react-parser';

export const TextComponent = ({ content }) => {
    return (
        <div>
            {content.heading &&
                <content.headingTag>{content.heading}</content.headingTag>
            }
            {content?.subheading &&
                <content.subheadingTag className='secondary-gradient'>{content.heading}</content.subheadingTag>
            }
            {content.description &&
                (
                    <div className="description-wrap">
                        {parse(content.description)}
                    </div>
                )
            }

            {content.rteContent &&
                (
                    <div className='rich-text-content'>
                        {parse(content.rteContent)}
                    </div>
                )
            }

            {content.buttons.length > 0 && (
                <div className='button-group'>
                    {content?.buttons?.map((button, index) => {
                        return (
                            <a href={button.link} key={index} target={button.tagret ?? button.target} className={`button ${index == 0 ? 'button-primary' : 'button-secondary'}`}>
                                {button.text}
                            </a>
                        )
                    })}
                </div>
            )}
        </div>
    )
}