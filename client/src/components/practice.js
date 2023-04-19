<SelectDropdown
data={countries}
onSelect={(selectedItem, index) => {
    console.log(selectedItem, index)
}}
buttonStyle= {styles.dropdown}
buttonTextAfterSelection={(selectedItem, index) => {
    // text represented after item is selected
    // if data array is an array of objects then return selectedItem.property to render after item is selected
    return selectedItem
}}
rowTextForSelection={(item, index) => {
    // text represented for each item in dropdown
    // if data array is an array of objects then return item.property to represent item in dropdown
    return item
}}
/>