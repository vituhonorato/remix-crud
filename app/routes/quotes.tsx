import { Link, Outlet, useMatches } from "@remix-run/react"

const QuotesLayout = () => {
   const matches = useMatches()
    return(  <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
    <h1><Link to='/'>Quotes</Link></h1>
    <Outlet/>
    {matches.map((match)=> {
    if(match.handle && match.handle.breadcrumb){
        const handleElement = match.handle.breadcrumb(match.data)
        if(match?.handle?.other) {
            return <li>Other: {match.handle.other}</li>
        }
        return <li>{handleElement}</li>
    }
    return(
      null
    )})}
   
    </div>
    )
}


export function ErrorBoundary({ error}: {error: Error}) {
    return <h1>Error quotes {JSON.stringify(error.message)}</h1>
  }

export default QuotesLayout