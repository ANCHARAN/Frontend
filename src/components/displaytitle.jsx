export function Displaytitle({original_table_to_be_passes_as_input})
{
return <div>
    {
    original_table_to_be_passes_as_input.map(function(single_entry)
    {
        return(
    <div key={single_entry.id}>
    <h1>{single_entry.title}</h1>
    </div>
    );
    }
    )
    }
</div>
}