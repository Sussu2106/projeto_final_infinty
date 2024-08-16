document.addEventListener('DOMContentLoaded', function() {
    let currentRow; // Para armazenar a linha que está sendo editada

    // Função para mostrar o formulário correto e esconder outros
    function showForm(formId) {
        document.querySelectorAll('.form-container').forEach(form => {
            form.classList.remove('active');
        });
        document.getElementById(formId).classList.add('active');
    }

    // Função para adicionar uma linha na tabela
    function addRow(tableId, data) {
        const table = document.querySelector(`#${tableId} tbody`);
        const row = document.createElement('tr');

        data.forEach(item => {
            const cell = document.createElement('td');
            cell.textContent = item;
            row.appendChild(cell);
        });

        // Adicionar botões de Editar e Excluir
        const actionsCell = document.createElement('td');
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('action-btn');
        editButton.addEventListener('click', function() {
            currentRow = row; // Armazenar a linha atual
            populateForm(data, tableId); // Preencher o formulário com os dados da linha
            showForm(getFormId(tableId)); // Mostrar o formulário correspondente
        });
        actionsCell.appendChild(editButton);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('action-btn');
        deleteButton.addEventListener('click', function() {
            row.remove();
        });
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);
        table.appendChild(row);
    }

    // Função para obter o ID do formulário correspondente
    function getFormId(tableId) {
        switch(tableId) {
            case 'equipamentos-tabela':
                return 'equipamentos-form-container';
            case 'veiculos-tabela':
                return 'veiculos-form-container';
            case 'dispositivos-tabela':
                return 'dispositivos-form-container';
        }
    }

    // Função para preencher o formulário com os dados da linha
    function populateForm(data, tableId) {
        switch(tableId) {
            case 'equipamentos-tabela':
                document.getElementById('equip-nome').value = data[0];
                document.getElementById('equip-descricao').value = data[1];
                document.getElementById('equip-categoria').value = data[2];
                document.getElementById('equip-localizacao').value = data[3];
                document.getElementById('equip-status').value = data[4];
                document.getElementById('equip-acoes').value = data[5];
                break;
            case 'veiculos-tabela':
                document.getElementById('veic-nome').value = data[0];
                document.getElementById('veic-modelo').value = data[1];
                document.getElementById('veic-placa').value = data[2];
                document.getElementById('veic-status').value = data[3];
                document.getElementById('veic-acoes').value = data[4];
                break;
            case 'dispositivos-tabela':
                document.getElementById('disp-tipo').value = data[0];
                document.getElementById('disp-descricao').value = data[1];
                document.getElementById('disp-localizacao').value = data[2];
                document.getElementById('disp-status').value = data[3];
                document.getElementById('disp-acoes').value = data[4];
                break;
        }
    }

    // Função para atualizar a linha com os novos dados
    function updateRow(tableId, data) {
        const cells = currentRow.querySelectorAll('td');
        data.forEach((item, index) => {
            cells[index].textContent = item;
        });
        currentRow = null; // Limpar a linha atual
    }

    // Configura os eventos dos links para mostrar os formulários
    document.getElementById('show-equipamentos-form').addEventListener('click', function(event) {
        event.preventDefault();
        showForm('equipamentos-form-container');
    });
    document.getElementById('show-veiculos-form').addEventListener('click', function(event) {
        event.preventDefault();
        showForm('veiculos-form-container');
    });
    document.getElementById('show-dispositivos-form').addEventListener('click', function(event) {
        event.preventDefault();
        showForm('dispositivos-form-container');
    });

    // Adicionar Equipamentos
    document.getElementById('add-equip').addEventListener('click', function() {
        const nome = document.getElementById('equip-nome').value;
        const descricao = document.getElementById('equip-descricao').value;
        const categoria = document.getElementById('equip-categoria').value;
        const localizacao = document.getElementById('equip-localizacao').value;
        const status = document.getElementById('equip-status').value;
        const acoes = document.getElementById('equip-acoes').value;

        if (nome && descricao && categoria && localizacao && status && acoes) {
            const data = [nome, descricao, categoria, localizacao, status, acoes];
            if (currentRow) {
                updateRow('equipamentos-tabela', data);
                document.getElementById('equipamentos-form').reset();
                currentRow = null;
            } else {
                addRow('equipamentos-tabela', data);
                document.getElementById('equipamentos-form').reset();
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Adicionar Veículos
    document.getElementById('add-veic').addEventListener('click', function() {
        const nome = document.getElementById('veic-nome').value;
        const modelo = document.getElementById('veic-modelo').value;
        const placa = document.getElementById('veic-placa').value;
        const status = document.getElementById('veic-status').value;
        const acoes = document.getElementById('veic-acoes').value;

        if (nome && modelo && placa && status && acoes) {
            const data = [nome, modelo, placa, status, acoes];
            if (currentRow) {
                updateRow('veiculos-tabela', data);
                document.getElementById('veiculos-form').reset();
                currentRow = null;
            } else {
                addRow('veiculos-tabela', data);
                document.getElementById('veiculos-form').reset();
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Adicionar Dispositivos
    document.getElementById('add-disp').addEventListener('click', function() {
        const tipo = document.getElementById('disp-tipo').value;
        const descricao = document.getElementById('disp-descricao').value;
        const localizacao = document.getElementById('disp-localizacao').value;
        const status = document.getElementById('disp-status').value;
        const acoes = document.getElementById('disp-acoes').value;

        if (tipo && descricao && localizacao && status && acoes) {
            const data = [tipo, descricao, localizacao, status, acoes];
            if (currentRow) {
                updateRow('dispositivos-tabela', data);
                document.getElementById('dispositivos-form').reset();
                currentRow = null;
            } else {
                addRow('dispositivos-tabela', data);
                document.getElementById('dispositivos-form').reset();
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
