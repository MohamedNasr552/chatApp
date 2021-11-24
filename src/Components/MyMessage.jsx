const MyMessage = ( [ message ] )=>{
    if (message?.attachements?.lenght  > 0 ) {
            return(
                <img 
                src={message.attachements[0].file }
                alt="message-attachement" 
                className="message-image"
                style={{ float:"right"}}
                />
            )
    }
    return(
        <div  className="message" style={{ float:"right" , marginRight:'18px' , color:"white" , backgroundColor:"#3b2a50"  }}  >
            {message.text}
        </div>
    )

}

export default MyMessage;