// const [searchTerm, setSearchTerm] = useState("");

//   const foundOutivities = outivities
//     .filter((outivity) =>
//       outivity.title.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .sort((a, b) => a.title.localeCompare(b.title));

// return (
//     <>
//       <Head>
//         <title>My Outivities</title>
//       </Head>

//       <StyledTitle>All Outivities</StyledTitle>

//       <main>
//         <SearchBar setSearchTerm={setSearchTerm} />
//         <OutivitiesList
//           outivities={searchTerm.length === 0 ? outivities : foundOutivities}
//           favorites={favorites}
//           onToggleFavorite={onToggleFavorite}
//         />
//         {searchTerm.length > 0 && foundOutivities.length === 0 && (
//           <>
//             <p>
//               No Outivity matching <strong>{`"${searchTerm}"`}</strong> found.{" "}
//             </p>
//             <p>Please try another search term or create a new Outivity.</p>
//           </>
//         )}
//       </main>
//     </>
//   );
// }
