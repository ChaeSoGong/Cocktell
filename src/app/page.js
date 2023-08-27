//Hompage is Server Component
import Home from './(client-component)/home';

export default async function Page() {
  let isFetch = false;
  let recipeData = null;
  let customData = null;
  let materialData = null;

  if (!isFetch){
    const recipeAPI = await import("./api/recipedata/route.js");
    const customAPI = await import("./api/customdata/route.js");
    const materialAPI = await import("./api/materialdata/route.js");
  
    const recipePromise = await recipeAPI.serverPOST({page_size:6,filter:{"property":"type","select":{"equals":"Cocktell"}}})
    const customPromise = await customAPI.serverPOST({page_size:3,filter:{"property":"type","select":{"equals":"Custom"}}})
    const materialPromise = await materialAPI.serverPOST({});
  
    recipeData = await recipePromise.json();
    customData = await customPromise.json();
    materialData = await materialPromise.json();

    !isFetch;
  }

  return (
    <div className='home_page'> {/* Home Component : Client Component */}
      <Home data={{
        recipeData: recipeData,
        customData: customData,
        materialData: materialData,
      }} />
      <div className="mt-40 mb-40 border-b border-gray-300"></div>
    </div>
  );
};