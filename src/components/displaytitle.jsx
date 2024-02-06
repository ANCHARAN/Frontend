export function Displaytitle({original_table_to_be_passes_as_input})
{
let id=1;
return <div>
    {
    original_table_to_be_passes_as_input.map(function(single_entry)
    {
        return(
                  <div>
                    {original_table_to_be_passes_as_input.map(function (single_entry) {
                      return (
                        <div key={id++}>
                          <h4>
                            {single_entry.name}
                            {single_entry.email}
                            {single_entry.mcq1}
                            {single_entry.mcq2}
                          </h4>
                        </div>
                      );
                    })}
                  </div>
                );
              }
    )
    }
</div>
}