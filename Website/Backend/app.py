from flask import Flask, jsonify, request, make_response
import werkzeug

def generate_response(json):
    response = make_response(json)
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers['Access-Control-Allow-Headers'] = '*'
    return response

app = Flask(__name__)

@app.before_request
def option_autoreply():
    if request.method == 'OPTIONS':
        response = make_response()
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = '*'
        return response

@app.route("/check_key", methods=["POST"])
def check_key():
    data = request.get_json()['data']
    if 'key' not in data:
        return generate_response(jsonify(success=True, accessToken='token'))
    else:
        if data['key'] == 'd1a66-cdae4-abee6-7a364-cfc4b-5d599':
            return generate_response(jsonify(success=True, accessToken='token'))
        else:
            return generate_response(jsonify(success=False, description='Wrong key'))

@app.errorhandler(werkzeug.exceptions.MethodNotAllowed)
def method_not_allowed(e):
    response = make_response("Not allowed")
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response

if __name__ == "__main__":
    app.run(debug=True, port=1337, host='0.0.0.0')