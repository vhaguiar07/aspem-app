import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Autarquia } from '../types';
import { createAutarquia } from '../autarquiaApi';
import { Button, FormGroup, Intent, InputGroup, Switch } from '@blueprintjs/core';
import { ptBR } from 'date-fns/locale';
import { parse } from 'date-fns';
import './addAutarquiaStyles.css';
import './nice-form.css'

const AddAutarquia: React.FC = () => {
  const [autarquia, setAutarquia] = useState<Partial<Autarquia>>({});
  const [adventicios, setAdventicios] = useState<{ [key: string]: string }[]>([]);
  const [dentCross, setDentCross] = useState<{ [key: string]: string }[]>([]);
  const [odMed, setOdMed] = useState<{ [key: string]: string }[]>([]);
  const [rioPax, setRioPax] = useState<{ [key: string]: string }[]>([]);
  const [cooperadores, setCooperadores] = useState<{ [key: string]: string }[]>([]);
  const [dependentes, setDependentes] = useState<{ [key: string]: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const handleChange = (name: string, value: any) => {
    setAutarquia({
      ...autarquia,
      [name]: value,
    });
  };

  const handleDateChange = (date: Date | null, fieldName: string) => {
    if (date) {
      handleChange(fieldName, date.toISOString());
    } else {
      handleChange(fieldName, null);
    }
  };

  const parseDate = (dateString: string) => {
    return parse(dateString, 'dd/MM/yyyy', new Date());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let parsedValue: any = value;

    if (name === 'dataAdmissao') {
      parsedValue = parseDate(value).toISOString();
    } 

    if (name === 'numero' || name === 'quantidadeAdventicios' || name === 'seguro' || name === 'totalJaneiro' || name === 'totalFevereiro' || name === 'totalMarco' || name === 'totalAbril' || name === 'totalMaio' || name === 'totalJunho' || name === 'totalJulho' || name === 'totalAgosto' || name === 'totalSetembro' || name === 'totalOutubro' || name === 'totalNovembro' || name === 'totalDezembro') {
      parsedValue = parseInt(value, 10);
      if (isNaN(parsedValue)) parsedValue = 0;
    }
  
    handleChange(name, parsedValue);
  };

  const handleAdventicioChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newAdventicios = adventicios.slice();
    newAdventicios[index] = { ...newAdventicios[index], [name]: value };
    setAdventicios(newAdventicios);
  };

  const handleDentCrossChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newDentCross = dentCross.slice();
    newDentCross[index] = { ...newDentCross[index], [name]: value };
    setDentCross(newDentCross);
  };

  const handleOdMedChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newOdMed = odMed.slice();
    newOdMed[index] = { ...newOdMed[index], [name]: value };
    setOdMed(newOdMed);
  };

  const handleRioPaxChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newRioPax = rioPax.slice();
    newRioPax[index] = { ...newRioPax[index], [name]: value };
    setRioPax(newRioPax);
  };

  const handleCooperadoresChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newCooperadores = cooperadores.slice();
    newCooperadores[index] = { ...newCooperadores[index], [name]: value };
    setCooperadores(newCooperadores);
  };

  const handleDependentesChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newDependentes = dependentes.slice();
    newDependentes[index] = { ...newDependentes[index], [name]: value };
    setDependentes(newDependentes);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createAutarquia({ ...autarquia, adventicios } as Autarquia);
      navigate('/autarquias');
    } catch (err) {
      setError('Erro ao adicionar autarquia.');
      console.error(err);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const formElements = formRef.current?.elements as HTMLCollectionOf<HTMLElement>;
      const index = Array.from(formElements).indexOf(e.target as HTMLElement);
      if (index > -1 && index < formElements.length - 1) {
        (formElements[index + 1] as HTMLElement).focus();
      }
    }
  };

  return (
    <div className="add-autarquia-page">
      <h1>Autarquia</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} ref={formRef} onKeyPress={handleKeyPress}>

        <div className="form-container-two">
          <div className="nice-form-group">
            <label htmlFor="orgao" className="form-label">
              Órgão
            </label>
            <input 
              id="orgao" 
              name="orgao" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('orgao', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="classificacao" className="form-label">
              Classificação
            </label>
            <input 
              id="classificacao" 
              name="classificacao" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('classificacao', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="matricula" className="form-label">
              Matrícula
            </label>
            <input 
              id="matricula" 
              name="matricula" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('matricula', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="matriculaSocial" className="form-label">
              Matrícula Social
            </label>
            <input 
              id="matriculaSocial" 
              name="matriculaSocial" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('matriculaSocial', e.target.value)} 
              required 
            />
          </div>
        </div>

        <div className="nice-form-group">
          <label htmlFor="nomeSocio" className="form-label">
            Nome do Sócio
          </label>
          <input 
            id="nomeSocio" 
            name="nomeSocio" 
            className="nice-input"
            type="text"
            onChange={(e) => handleChange('nomeSocio', e.target.value)} 
            required 
          />
        </div>

        <div className="form-container-three">
          <div className="nice-form-group">
            <label htmlFor="endereco" className="form-label">
              Endereço
            </label>
            <input 
              id="endereco" 
              name="endereco" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('endereco', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="numero" className="form-label">
              Número
            </label>
            <input 
              id="numero" 
              name="numero" 
              className="nice-input" 
              type="text"
              onChange={handleInputChange} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="complemento" className="form-label">
              Complemento
            </label>
            <input 
              id="complemento" 
              name="complemento" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('complemento', e.target.value)} 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="bairroResidencia" className="form-label">
              Bairro Residência
            </label>
            <input 
              id="bairroResidencia" 
              name="bairroResidencia" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('bairroResidencia', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="cepResidencia" className="form-label">
              CEP Residência
            </label>
            <input 
              id="cepResidencia" 
              name="cepResidencia" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('cepResidencia', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="cidadeResidencia" className="form-label">
              Cidade Residência
            </label>
            <input 
              id="cidadeResidencia" 
              name="cidadeResidencia" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('cidadeResidencia', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="uf" className="form-label">
              UF
            </label>
            <input 
              id="uf" 
              name="uf" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('uf', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <FormGroup label="Data de Nascimento" labelFor="dataNascimento">
              <DatePicker
                selected={autarquia.dataNascimento ? new Date(autarquia.dataNascimento) : null}
                onChange={(date) => handleDateChange(date, 'dataNascimento')}
                dateFormat="dd/MM/yyyy"
                placeholderText="DD/MM/AAAA"
                locale={ptBR}
                customInput={<InputGroup id="dataNascimento" name="dataNascimento" onChange={handleInputChange} />}
              />
            </FormGroup>
          </div>

          <div className="nice-form-group">
            <FormGroup label="Data de Admissão" labelFor="dataAdmissao">
              <DatePicker
                selected={autarquia.dataAdmissao ? new Date(autarquia.dataAdmissao) : null}
                onChange={(date) => handleDateChange(date, 'dataAdmissao')}
                dateFormat="dd/MM/yyyy"
                placeholderText="DD/MM/AAAA"
                locale={ptBR}
                customInput={<InputGroup id="dataAdmissao" name="dataAdmissao" onChange={handleInputChange} />}
              />
            </FormGroup>
          </div>
        </div>

        <div className="form-container-three">
          <div className="nice-form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input 
              id="email" 
              name="email" 
              className="nice-input" 
              type="email"
              onChange={(e) => handleChange('email', e.target.value)} 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="telefoneResidencia" className="form-label">
              Telefone Residência
            </label>
            <input 
              id="telefoneResidencia" 
              name="telefoneResidencia" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('telefoneResidencia', e.target.value)} 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="telefoneCelular" className="form-label">
              Telefone Celular
            </label>
            <input 
              id="telefoneCelular" 
              name="telefoneCelular" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('telefoneCelular', e.target.value)} 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="telefoneComercial" className="form-label">
              Telefone Comercial
            </label>
            <input 
              id="telefoneComercial" 
              name="telefoneComercial" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('telefoneComercial', e.target.value)} 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="estadoCivil" className="form-label">
              Estado Civil
            </label>
            <input 
              id="estadoCivil" 
              name="estadoCivil" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('estadoCivil', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="conjuge" className="form-label">
              Cônjuge
            </label>
            <input 
              id="conjuge" 
              name="conjuge" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('conjuge', e.target.value)} 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="cpf" className="form-label">
              CPF
            </label>
            <input 
              id="cpf" 
              name="cpf" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('cpf', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="rg" className="form-label">
              RG
            </label>
            <input 
              id="rg" 
              name="rg" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('rg', e.target.value)} 
              required 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="orgaoExpedidor" className="form-label">
              Órgão Expedidor
            </label>
            <input 
              id="orgaoExpedidor" 
              name="orgaoExpedidor" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('orgaoExpedidor', e.target.value)} 
              required 
            />
          </div>
        </div>

        <div className="form-container-two">
          <div className="nice-form-group">
            <label>Histórico do Sócio</label>
              <textarea
                id="historicoSocio"
                name="historicoSocio"
                onChange={(e) => handleChange('historicoSocio', e.target.value)}
                rows={6}
                cols={70}
              />
          </div>
          <div className="nice-form-group">
            <label>Observações sobre pagamentos</label>
            <textarea
              id="observacoesPagamentos"
              name="observacoesPagamentos"
              onChange={(e) => handleChange('observacoesPagamentos', e.target.value)}
              rows={6}
              cols={70}
            />
          </div>    
        </div>

        <div className="form-container-lonely">
          <div className="nice-form-group" style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="falecido" style={{ marginRight: '8px', marginBottom: '0px' }}>Falecido</label>
            <input type="checkbox" id="falecido" name="falecido" />
          </div>

          <div className="nice-form-group">
            <FormGroup label="Data de Falecimento" labelFor="dataFalecimento">
              <DatePicker
                selected={autarquia.dataFalecimento ? new Date(autarquia.dataFalecimento) : null}
                onChange={(date) => handleDateChange(date, 'dataFalecimento')}
                dateFormat="dd/MM/yyyy"
                placeholderText="DD/MM/AAAA"
                locale={ptBR}
                customInput={<InputGroup id="dataFalecimento" name="dataFalecimento" onChange={handleInputChange} />}
              />
            </FormGroup>
          </div>
        </div>

        <div className="form-container-two">
          <div className="nice-form-group">
            <label htmlFor="seguro" className="form-label">
              Faixa Seguro
            </label>
            <input 
              id="seguro" 
              name="seguro" 
              className="nice-input" 
              type="text"
              onChange={handleInputChange} 
            />
          </div>

          <div className="nice-form-group" style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="reversivel" style={{ marginRight: '8px', marginBottom: '0px' }}>Reversível</label>
            <input type="checkbox" id="reversivel" name="reversivel" />
          </div>
        </div>

        <div className="form-container-two">
          <div className="nice-form-group">
            <label htmlFor="valorDescontoSeguro" className="form-label">
              Valor Desconto Seguro
            </label>
            <input 
              id="valorDescontoSeguro" 
              name="valorDescontoSeguro" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('valorDescontoSeguro', e.target.value)} 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="morteNatural" className="form-label">
              Morte Natural
            </label>
            <input 
              id="morteNatural" 
              name="morteNatural" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('morteNatural', e.target.value)} 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="morteAcidental" className="form-label">
              Morte Acidental
            </label>
            <input 
              id="morteAcidental" 
              name="morteAcidental" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('morteAcidental', e.target.value)} 
            />
          </div>

          <div className="nice-form-group">
            <label htmlFor="invalidezPermanenteAcidente" className="form-label">
              Invalidez Permanente Acidente
            </label>
            <input 
              id="invalidezPermanenteAcidente" 
              name="invalidezPermanenteAcidente" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('invalidezPermanenteAcidente', e.target.value)} 
            />
          </div>
        </div>

        <div className="form-container-two">
          <div className="nice-form-group">
            <label htmlFor="descontoSocioEfetivo" className="form-label">
              Desconto Sócio Efetivo
            </label>
            <input 
              id="descontoSocioEfetivo" 
              name="descontoSocioEfetivo" 
              className="nice-input" 
              type="text"
              onChange={handleInputChange} 
            />
          </div>

          <div className="nice-form-group" style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="omitido" style={{ marginRight: '8px', marginBottom: '0px' }}>Omitido</label>
            <input type="checkbox" id="omitido" name="omitido" />
          </div>
        </div>

        <div className="form-container-lonely">
        <div className="nice-form-group" style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="ps" style={{ marginRight: '8px', marginBottom: '0px' }}>PS</label>
            <input type="checkbox" id="ps" name="ps" />
          </div>
        </div>

        <div className="form-container-lonely">
          <div className="nice-form-group">
            <label htmlFor="anoFiscal" className="form-label">
              Ano Fiscal
            </label>
            <input 
              id="anoFiscal" 
              name="anoFiscal" 
              className="nice-input" 
              type="text"
              onChange={(e) => handleChange('anoFiscal', e.target.value)} 
              required 
            />
          </div>
        </div>

        <div className="form-container-three">
        <div className="nice-form-group">
          <label htmlFor="totalJaneiro" className="form-label">
            Total Janeiro
          </label>
          <input 
            id="totalJaneiro" 
            name="totalJaneiro" 
            className="nice-input" 
            type="text"
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalFevereiro" className="form-label">
            Total Fevereiro
          </label>
          <input 
            id="totalFevereiro" 
            name="totalFevereiro" 
            className="nice-input" 
            type="text"
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalMarco" className="form-label">
            Total Março
          </label>
          <input 
            id="totalMarco" 
            name="totalMarco" 
            className="nice-input" 
            type="text"
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalAbril" className="form-label">
            Total Abril
          </label>
          <input 
            id="totalAbril" 
            name="totalAbril" 
            className="nice-input" 
            type="text"
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalMaio" className="form-label">
            Total Maio
          </label>
          <input 
            id="totalMaio" 
            name="totalMaio" 
            className="nice-input" 
            type="text"
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalJunho" className="form-label">
            Total Junho
          </label>
          <input 
            id="totalJunho" 
            name="totalJunho" 
            className="nice-input" 
            type="text"
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalJulho" className="form-label">
            Total Julho
          </label>
          <input 
            id="totalJulho" 
            name="totalJulho" 
            className="nice-input" 
            type="text"
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalAgosto" className="form-label">
            Total Agosto
          </label>
          <input 
            id="totalAgosto" 
            name="totalAgosto" 
            className="nice-input" 
            type="text"
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalSetembro" className="form-label">
            Total Setembro
          </label>
          <input 
            id="totalSetembro" 
            name="totalSetembro" 
            className="nice-input" 
            type="text"
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalOutubro" className="form-label">
            Total Outubro
          </label>
          <input 
            id="totalOutubro" 
            name="totalOutubro" 
            className="nice-input" 
            type="text"
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalNovembro" className="form-label">
            Total Novembro
          </label>
          <input 
            id="totalNovembro" 
            name="totalNovembro" 
            className="nice-input" 
            type="text"
            onChange={handleInputChange} 
          />
        </div>

        <div className="nice-form-group">
          <label htmlFor="totalDezembro" className="form-label">
            Total Dezembro
          </label>
          <input 
            id="totalDezembro" 
            name="totalDezembro" 
            className="nice-input" 
            type="text"
            onChange={handleInputChange} 
          />
        </div>
        </div>

        <div className="form-container-lonely">
          <div className="nice-form-group">
            <FormGroup label="Adventícios" labelFor="quantidadeAdventicios">
              <InputGroup
                id="quantidadeAdventicios"
                name="quantidadeAdventicios"
                type="number"
                onChange={(e) => {
                  handleInputChange(e);

                  const quantidade = parseInt(e.target.value, 10);
                  if (!isNaN(quantidade) && quantidade >= 0) {
                    setAdventicios(Array(quantidade).fill({}));
                  } else {
                    setAdventicios([]);
                  }
                }}
              />
            </FormGroup>
          </div>

          {adventicios.map((_, index) => (
            <div key={index} className="adventicio-group">
              <FormGroup label={`Adventício ${index + 1}`} labelFor={`nomeCompleto${index}`}>
                <InputGroup
                  id={`nomeCompleto${index}`}
                  name="nomeCompleto"
                  onChange={(e) => handleAdventicioChange(index, e)}
                  required
                />
              </FormGroup>
            </div>
          ))}
        </div>

        <div className="form-container-lonely">
          <div className="nice-form-group">
            <FormGroup label="Faixa Dente Cross" labelFor="dentCross">
              <InputGroup
                id="dentCross"
                name="dentCross"
                type="number"
                onChange={(e) => {
                  handleInputChange(e);

                  const quantidade = parseInt(e.target.value, 10);
                  if (!isNaN(quantidade) && quantidade >= 0) {
                    setDentCross(Array(quantidade).fill({}));
                  } else {
                    setDentCross([]);
                  }
                }}
              />
            </FormGroup>
          </div>

          {dentCross.map((_, index) => (
            <div key={index} className="dentCross-group">
              <FormGroup label={`Beneficiário ${index + 1}`} labelFor={`nomeCompleto${index}`}>
                <InputGroup
                  id={`nomeCompleto${index}`}
                  name="nomeCompleto"
                  onChange={(e) => handleDentCrossChange(index, e)}
                  required
                />
              </FormGroup>
            </div>
          ))}
        </div>

        <div className="form-container-lonely">
          <div className="nice-form-group">
            <FormGroup label="Faixa OD Med" labelFor="odMed">
              <InputGroup
                id="odMed"
                name="odMed"
                type="number"
                onChange={(e) => {
                  handleInputChange(e);

                  const quantidade = parseInt(e.target.value, 10);
                  if (!isNaN(quantidade) && quantidade >= 0) {
                    setOdMed(Array(quantidade).fill({}));
                  } else {
                    setOdMed([]);
                  }
                }}
              />
            </FormGroup>
          </div>

          {odMed.map((_, index) => (
            <div key={index} className="odMed-group">
              <FormGroup label={`Beneficiário ${index + 1}`} labelFor={`nomeCompleto${index}`}>
                <InputGroup
                  id={`nomeCompleto${index}`}
                  name="nomeCompleto"
                  onChange={(e) => handleOdMedChange(index, e)}
                  required
                />
              </FormGroup>
            </div>
          ))}
        </div>

        <div className="form-container-lonely">
          <div className="nice-form-group">
            <FormGroup label="Rio Pax" labelFor="rioPax">
              <InputGroup
                id="rioPax"
                name="rioPax"
                type="number"
                onChange={(e) => {
                  handleInputChange(e);

                  const quantidade = parseInt(e.target.value, 10);
                  if (!isNaN(quantidade) && quantidade >= 0) {
                    setRioPax(Array(quantidade).fill({}));
                  } else {
                    setRioPax([]);
                  }
                }}
              />
            </FormGroup>
          </div>

          {rioPax.map((_, index) => (
            <div key={index} className="rioPax-group">
              <FormGroup label={`Beneficiário ${index + 1}`} labelFor={`nomeCompleto${index}`}>
                <InputGroup
                  id={`nomeCompleto${index}`}
                  name="nomeCompleto"
                  onChange={(e) => handleRioPaxChange(index, e)}
                  required
                />
              </FormGroup>
            </div>
          ))}
        </div>

        <div className="form-container-lonely">
          <div className="nice-form-group">
            <FormGroup label="Cooperadores" labelFor="cooperadores">
              <InputGroup
                id="cooperadores"
                name="cooperadores"
                type="number"
                onChange={(e) => {
                  handleInputChange(e);

                  const quantidade = parseInt(e.target.value, 10);
                  if (!isNaN(quantidade) && quantidade >= 0) {
                    setCooperadores(Array(quantidade).fill({}));
                  } else {
                    setCooperadores([]);
                  }
                }}
              />
            </FormGroup>
          </div>

          {cooperadores.map((_, index) => (
            <div key={index} className="cooperadores-group">
              <FormGroup label={`Beneficiário ${index + 1}`} labelFor={`nomeCompleto${index}`}>
                <InputGroup
                  id={`nomeCompleto${index}`}
                  name="nomeCompleto"
                  onChange={(e) => handleCooperadoresChange(index, e)}
                  required
                />
              </FormGroup>
            </div>
          ))}
        </div>

        <div className="form-container-lonely">
          <div className="nice-form-group">
            <FormGroup label="Dependentes" labelFor="dependentes">
              <InputGroup
                id="dependentes"
                name="dependentes"
                type="number"
                onChange={(e) => {
                  handleInputChange(e);

                  const quantidade = parseInt(e.target.value, 10);
                  if (!isNaN(quantidade) && quantidade >= 0) {
                    setDependentes(Array(quantidade).fill({}));
                  } else {
                    setDependentes([]);
                  }
                }}
              />
            </FormGroup>
          </div>

          {dependentes.map((_, index) => (
            <div key={index} className="dependentes-group">
              <FormGroup label={`Beneficiário ${index + 1}`} labelFor={`nomeCompleto${index}`}>
                <InputGroup
                  id={`nomeCompleto${index}`}
                  name="nomeCompleto"
                  onChange={(e) => handleDependentesChange(index, e)}
                  required
                />
              </FormGroup>
            </div>
          ))}
        </div>

        <div className="button-div">
          <Button type="submit" intent={Intent.PRIMARY}>
            Adicionar Autarquia
          </Button>
        </div>

      </form>
    </div>
  );
};

export default AddAutarquia;
