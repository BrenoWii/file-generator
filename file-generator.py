from jinja2 import Template

FILE_NAME = 'account-number-field'
COMPONENT_NAME = 'AccountNumberField'
TEMPLATE_NAME  = 'template-field.js'
def criar_arquivo():
 
  # Carregue o conteúdo do template

  with open(TEMPLATE_NAME, 'r') as file:
    template_content = file.read()
    

  # Crie um objeto de template Jinja2
  template = Template(template_content)
  print(template)
  # Preencha o template com dados específicos
  conteudo_final = template.render({ 'nome_do_componente': COMPONENT_NAME, 'nome_do_arquivo': FILE_NAME })

  # Crie um novo arquivo com o conteúdo preenchido
  with open(str(FILE_NAME) + ".spec.tsx", 'w') as file:
    file.write(conteudo_final)

if __name__ == "__main__":
  # Exemplo de uso
  criar_arquivo()