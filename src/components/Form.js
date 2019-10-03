import React from 'react'

const locations = [
    ['Amsterdam', 'nl'],
    ['Bangkok', 'th'],
    ['Hanoi','vn'],
    ['Kuala Lumpur','my'],
    ['London', 'uk'],
    ['Manila','ph'],
    ['Paris', 'fr'],
    ['Phnom Penh','kh'],
    ['Singapore', 'sg'],

    
];
const areaItems = locations.map((location) =>
  <option value={[location[0],location[1]]}>{location[0]}</option>
);

const Form = props => (
    <form >
        <div className="input-field col s12">
            <select name="location" defaultValue={'DEFAULT'} onChange={props.getWeather}>
                <option value="DEFAULT" disabled>Select City</option>
                {areaItems}
            </select>
        </div>
    </form>
)


export default Form;
