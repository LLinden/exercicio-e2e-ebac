/// <reference types="cypress" />
import paginaCarrinhoPage from "../support/page_objects/pagina-carrinho.page";
import paginaCheckoutPage from "../support/page_objects/pagina-checkout.page";
import paginaInicialPage from "../support/page_objects/pagina-inicial.page";
import { faker } from "@faker-js/faker";

const dadosProduto = require("../fixtures/produto.json");
const dadosCheckout = require("../fixtures/dadosCheckout.json");

context("Exercicio - Testes End-to-end - Fluxo de pedido", () => {
  /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve fazer um pedido na loja Ebac Shop de ponta a ponta", () => {
    let email = faker.internet.email();
    paginaInicialPage.selecionaProduto(
      dadosProduto.produto,
      dadosProduto.tamanho,
      dadosProduto.cor,
      dadosProduto.quantidade
    );
    paginaCarrinhoPage.carrinho();
    paginaCheckoutPage.preencheFaturamento(
      dadosCheckout.nome,
      dadosCheckout.sobrenome,
      dadosCheckout.empresa,
      dadosCheckout.pais,
      dadosCheckout.empresa,
      dadosCheckout.complemento,
      dadosCheckout.cidade,
      dadosCheckout.estado,
      dadosCheckout.cep,
      dadosCheckout.telefone,
      email,
      dadosCheckout.senha
    );
    cy.get('.woocommerce-notice').should("contain", "Obrigado. Seu pedido foi recebido.");
  });
});