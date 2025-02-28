export default function Categories() {  
    return (  
        <>
        <div className="flex justify-center space-x-3 mt-6">
        {["Breakfast", "Lunch", "Snacks", "Beverages", "Popular"].map((category) => (
          <button key={category} className="px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-full">
            {category}
          </button>
        ))}
      </div>
        </>
      )}