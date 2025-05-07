



document.getElementById('btn').addEventListener('click', selectFile)

async function selectFile() {
  const caminho = await window.api.selectFile()

for ( i = 0; i< caminho.length; i++ ){
   const label = document.createElement('label');
   label.classList.add('tarefa')

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = true;
  label.appendChild(checkbox);

  label.append(caminho[i].tarefa)
  const file_Path = document.getElementById('output')

  file_Path.append(label);
  file_Path.append(document.createElement('br'));

}
} 

