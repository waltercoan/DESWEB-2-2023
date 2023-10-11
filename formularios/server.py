from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('formulario.html')
    #return '''
    #       <h1>Eu nao acredito</h1> 
    #       '''