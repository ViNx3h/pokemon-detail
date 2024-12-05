
const PokemonDetail = (data: any) => {
    console.log("data", data.data);

    return (
        <>
            {
                (data.data === 'ditto') && (
                    <div className="" style={{ color: 'white' }}>
                        detail: ngoo
                    </div>
                )
            }
            {
                (data.data === 'snorlax') && (
                    <div>
                        detail: bell
                    </div>
                )
            }

        </>
    )
}

export default PokemonDetail;