package com.example.aula.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "tb_jogador")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Nome é obrigatório.")
    private String nome;

    @NotNull(message = "O sexo é obrigatório.")
    @Enumerated(EnumType.STRING)
    private Sexo sexo;

    @NotNull(message = "A idade é obrigatória.")
    private String idade;

    @NotNull(message = "A altura é obrigatória")
    private String altura;

    @NotNull(message = "Coloque o peso.")
    private String peso;

    @NotNull(message = "Coloque a posição.")
    private String posicao;

    private String numCamisa;

    public Usuario() {
    }

    public Usuario(Long id, String nome, Sexo sexo, String idade, String altura, String peso, String posicao, String numCamisa) {
        this.id = id;
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.posicao = posicao;
        this.numCamisa = numCamisa;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Sexo getSexo() {
        return sexo;
    }

    public void setSexo(Sexo sexo) {
        this.sexo = sexo;
    }

    public String getIdade() {
        return idade;
    }

    public void setIdade(String idade) {
        this.idade = idade;
    }

    public String getAltura() {
        return altura;
    }

    public void setAltura(String altura) {
        this.altura = altura;
    }

    public String getPeso() {
        return peso;
    }

    public void setPeso(String peso) {
        this.peso = peso;
    }

    public String getPosicao() {
        return posicao;
    }

    public void setPosicao(String posicao) {
        this.posicao = posicao;
    }

    public String getNumCamisa() {
        return numCamisa;
    }

    public void setNumCamisa(String numCamisa) {
        this.numCamisa = numCamisa;
    }
}

