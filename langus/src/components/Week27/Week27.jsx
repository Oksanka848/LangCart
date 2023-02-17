import React, { useState } from 'react';
import '../diction.json';


export default function Week27() {
    
	const [words, setWords] = useState(true);
	
	const rows = words.map(words => {
		const cells = rows.map(row => {
			let elem;
			
			if (!field.isEdit) {
				elem = <span onClick={() => startEdit(note.id, field.name)}>
					{field.value}
				</span>;
			} else {
				elem = <input
					value={field.value}
					onChange={(event) => changeCell(note.id, field.name, event)}
					onBlur={() => endEdit(note.id, field.name)}
				/>;
			}
			
			return <td key={field.name}>{elem}</td>;
		});
		
		return <tr key={note.id}>{cells}</tr>;
	});
	
	function startEdit(id, name) {
		setWords(words.map(word => {
			if (word.id === id) {
				const fields = note.fields.map(field => {
					if (field.name === name) {
						return {...field, isEdit: true}
					} else {
						return field;
					}
				});
				
				return {id, fields};
			} else {
				return note;
			}
		}));
	}
	
	function endEdit(id, name) {
		setWords(words.map(note => {
			if (word.id === id) {
				const fields = word.fields.map(field => {
					if (field.name === name) {
						return {...field, isEdit: false}
					} else {
						return field;
					}
				});
				
				return {id, fields};
			} else {
				return note;
			}
		}));
	}
	
	function changeCell(id, name, event) {
		setWords(words.map(note => {
			if (note.id === id) {
				const fields = note.fields.map(field => {
					if (field.name === name) {
						return {...field, value: event.target.value}
					} else {
						return field;
					}
				});
				
				return {id, fields};
			} else {
				return note;
			}
		}));
	}
	
	return <div>
		<table>
			<tbody>
				{rows}
			</tbody>
		</table>
	</div>;
}
