const alunos = [
    
    "Daniel", "Edson", "Erica", "Gabriel Almeida", "Gabriel Freitas", 
    "Julia", "Kevin", "Vitor"
];

const marcas = [
    {
        nome: "EcoVerde",
        descricao: "Produtos ecológicos e sustentáveis.",
        cores: ["#3A7D44", "#F5E6CC", "#8B5A2B", "#FFFFFF"]
    },
    {
        nome: "TechNova",
        descricao: "Soluções tecnológicas inovadoras.",
        cores: ["#007BFF", "#343A40", "#FFFFFF", "#000000"]
    },
    {
        nome: "Bella Vita",
        descricao: "Cosméticos veganos e naturais.",
        cores: ["#FFB6C1", "#FFD700", "#FFFFFF", "#98FB98"]
    },
    {
        nome: "Urban Fit",
        descricao: "Roupas e acessórios fitness.",
        cores: ["#E63946", "#111111", "#FFFFFF", "#1E3A8A"]
    },
    {
        nome: "Gourmet Art",
        descricao: "Culinária contemporânea com ingredientes orgânicos.",
        cores: ["#800020", "#FFF5E1", "#3C6E47", "#5C4033"]
    },
    {
        nome: "NeoLux",
        descricao: "Moda e acessórios de luxo minimalista.",
        cores: ["#000000", "#C0C0C0", "#FFFFFF", "#4169E1"]
    },
    {
        nome: "PetViva",
        descricao: "Produtos premium para pets.",
        cores: ["#FFA500", "#87CEEB", "#FFFFFF", "#32CD32"]
    },
    {
        nome: "PixelPlay",
        descricao: "Desenvolvimento de jogos e experiências digitais.",
        cores: ["#8A2BE2", "#000000", "#39FF14", "#007FFF"]
    },
    {
        nome: "Solaris Energy",
        descricao: "Energia solar e soluções renováveis.",
        cores: ["#FFD700", "#FF8C00", "#006400", "#ADD8E6"]
    },
    {
        nome: "Casa & Conforto",
        descricao: "Móveis e decoração moderna.",
        cores: ["#F5F5DC", "#005F6B", "#D2B48C", "#4A4A4A"]
    },
    {
        nome: "BioNutri",
        descricao: "Produtos naturais e suplementos saudáveis.",
        cores: ["#556B2F", "#FAFAD2", "#FFFFFF", "#C2A87A"]
    },
    {
        nome: "EduTech Solutions",
        descricao: "Cursos online interativos.",
        cores: ["#1E90FF", "#9370DB", "#FFFFFF", "#2F4F4F"]
    }
];

function sortear() {
    const alunosSorteados = [...alunos]; // Clona o array de alunos
    const marcasSorteadas = [...marcas]; // Clona o array de marcas
    let resultadoHTML = "";

    for (let i = 0; i < 12; i++) {
        // Escolhe um aluno aleatoriamente e remove do array
        const indexAluno = Math.floor(Math.random() * alunosSorteados.length);
        const aluno = alunosSorteados.splice(indexAluno, 1)[0];

        // Escolhe uma marca aleatoriamente e remove do array
        const indexMarca = Math.floor(Math.random() * marcasSorteadas.length);
        const marca = marcasSorteadas.splice(indexMarca, 1)[0];

        // Gera o HTML para exibir os resultados
        resultadoHTML += `
            <li>
                <strong>Aluno:</strong> ${aluno} <br>
                <strong>Marca:</strong> ${marca.nome} <br>
                <strong>Descrição:</strong> ${marca.descricao} <br>
                <strong>Cores:</strong> 
                <div>
                    <span style="display:inline-block; width:20px; height:20px; background:${marca.cores[0]}"></span>
                    <span>${marca.cores[0]}</span>
                </div>
                <div>
                    <span style="display:inline-block; width:20px; height:20px; background:${marca.cores[1]}"></span>
                    <span>${marca.cores[1]}</span>
                </div>
                <div>
                    <span style="display:inline-block; width:20px; height:20px; background:${marca.cores[2]}"></span>
                    <span>${marca.cores[2]}</span>
                </div>
                <div>
                    <span style="display:inline-block; width:20px; height:20px; background:${marca.cores[3]}"></span>
                    <span>${marca.cores[3]}</span>
                </div>
            </li>
        `;
    }

    document.getElementById("resultado").innerHTML = resultadoHTML;
}
