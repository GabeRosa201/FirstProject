import '../css/inscricao.css'

function Inscricao(){
    return <>
        <div className="titulo">
            <h2>Inscrição</h2>
        </div>
        <div className="info_inscricao">
            <div className="box">
                <h3>Novos Estudantes</h3> 
                <p>
                    Nosso ano letivo começa em Fevereiro, não perca a inscrição dos alunos que 
                    acabaram de completar 11 anos.
                    Nos iremos enviar a confirmação de sua matricula junto com o material escolar
                    .
                </p>
            </div>
            <div className="box">
                <h3>Prencha aqui</h3> <br/>
                <form>
                    <label for="nome">Nome Completo</label>
                <input type="text" id="nome"/>

                <label for="">País </label>
                <select name="" id="pais">
                    <option value="">--Escolha--</option>
                    <option value="">Argentina</option>
                    <option value="">Bolívia</option>
                    <option value="">Brasil</option>
                    <option value="">Chile</option>
                    <option value="">Colômbia</option>
                    <option value="">Equador</option>
                    <option value="">Guiana</option>
                    <option value="">Paraguai</option>
                    <option value="">Peru</option>
                    <option value="">Suriname</option>
                    <option value="">Uruguai</option>
                    <option value="">Venezuela</option>
                </select>

                <label for="datanasc">Data de Nascimento </label>
                <input type="date" id="datanasc"/>

                <label for="">Email </label>
                <input type="text" placeholder="exemple@dominio.com" id="email"/>
                <div id="mensagemErro"></div>

                <button type="submit" onclick="enviaDados()">Enviar</button>
                </form>
            </div>

            <div className="grafico">
                <h1>Titulo 1</h1>
            </div>

        </div>
    </>
}

export default Inscricao