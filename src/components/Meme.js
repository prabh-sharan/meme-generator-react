


export default function Meme(){
    return(
        <div className="form">
                <div className="label">
                    <label className="form-label">Top text</label>
                    <input className="form-input" 
                           placeholder="Shut up" 
                           type="text" />
                </div>
                
                <div className="label">
                    <label className="form-label">Bottom text</label>
                    <input className="form-input" 
                           placeholder="and take my money" type="text" />
                </div>

                <button className="form-button">Get a new meme image</button>
        </div>
    )
}