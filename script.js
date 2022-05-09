function saudacao(){
    let horario = new Date().getHours();
    if (horario <= 5){
        return "Boa madrugada, ";
    }else if (horario < 12){
        return "Bom dia, ";
    }else if (horario < 18){
        return "Boa tarde, ";
    }else{
        return "Boa noite, ";
    }
  }
  console.log(saudacao());
  
  let nome = prompt("Digite o sue nome");
  alert(saudacao() + nome + "!" + "\nSeja muito bem vindo!");
  /*
    Site para estudar:
        javascript.info
  */