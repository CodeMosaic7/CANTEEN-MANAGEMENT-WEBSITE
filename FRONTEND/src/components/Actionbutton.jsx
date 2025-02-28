export default function Actionbutton() {  
    return (    
        <>
        <div className="flex justify-center space-x-4 mt-6">
        <button className="flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-lg text-lg">
          <i className="fas fa-redo"></i>
          <span>Order again</span>
        </button>
        <button className="flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-lg text-lg">
          <i className="fas fa-clock"></i>
          <span>Schedule for later</span>
        </button>
      </div>
      </>
    )
}