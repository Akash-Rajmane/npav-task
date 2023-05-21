Status: Everything Works

How it works?
Initially there is no input, so average is shown as a & no horizontal bar is rendered.
Initially selected source of data is test data.
When user types the valid contry name then average value is shown according to selected source of data and horizontal bar is rendered with 2*average px width.
If the typed country name is not included in the source of data then average is shown as a & no horizontal bar is rendered.

For Responsiveness media queries are used.

custom hook(useFetch) is used to fetch the serverData.
testData is used from given test_data.
When user clicks on the radio button then respective data is stored in sourceData state using useEffect hook.
When user types a country name then this name is stored in searchText state.
calculateAvg function is used to set the value of average. calculateAvg sets the average that is found first.
Conditional Rendering is used to show horizontal bar.