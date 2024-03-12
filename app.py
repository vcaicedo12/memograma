from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('inicio.html')

@app.route('/juego/dbz')
def juego():
    return render_template('index.html')  # Asume que 'index.html' es la página de tu juego
@app.route('/juego/st')
def juego_st():
    return render_template('st.html')  # Asume que 'index.html' es la página de tu juego
@app.route('/win')
def win():
    return render_template('ganador.html')  # Asume que 'index.html' es la página de tu juego
@app.route('/lost')
def lost():
    return render_template('lost.html')  # Asume que 'index.html' es la página de tu juego

if __name__ == '__main__':
    app.run(debug=True)
