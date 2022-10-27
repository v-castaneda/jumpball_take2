const React = require('react')
const Default = require('./layouts/Default')

function newPlayer({ players }) {
    return (
        <Default>
            <h2>Add new player</h2>
            <form action='/players' method='POST'>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    required
                />
                <label htmlFor='bio'>Bio</label>
                <input
                    type='text'
                    name='bio'
                />
                <label htmlFor='position'>
                    Position
                    <select>
                        <option value='Point Guard'>Point Guard</option>
                        <option value='Shooting Guard'>Shooting Guard</option>
                        <option value='Small Forward'>Small Forward</option>
                        <option value='Power Forward'>Power Forward</option>
                        <option value='Center'>Center</option>
                    </select>
                </label>
                <label htmlFor='days'>
                    Days Available
                </label>
            </form>
        </Default>
    )
}