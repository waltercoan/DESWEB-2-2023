from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('formulario.html')
    #return '''
    #       <h1>Eu nao acredito</h1> 
    #       '''

@app.route("/servidor", methods=['POST'])
def servidor():
    dados = request.form
    print(dados)
    return ''