"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import { useDispacth, useSelector } from 'react-redux';
import { addContact, updateContact, setEditingContact } from '../store/contactSlice';
import type { RootState } from '../store';
import { Form, FormGroup, Label, Input, Button, ButtonGroup, ErrorMessage } from './styles';

const ContactForm: React.FC = () => {
    const dispatch = useDispacth();
    const editingContact = useSelector((state: RootState) => state.contacts.editingContact);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
    })

    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        phone: "",
    })

    useEffect(() => {
        if (editingContact) {
            setFormData({
                fullName: editingContact.fullName,
                email: editingContact.email,
                phone: editingContact.phone,
            })
        } else {
            setFormData({
                fullName: "",
                email: "",
                phone: "",
            })
        }
    }, [editingContact])

    const validateForm = () => {
        let isValid = true
        const newErrors = {
            fullName: "",
            email: "",
            phone: "",
        }

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Nome completo é obrigatório"
            isValid = false
        }

        if (!formData.email.trim()) {
            newErrors.email = "E-mail é obrigatório"
            isValid = false
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "E-mail inválido"
            isValid = false
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Telefone é obrigatório"
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        if (editingContact) {
            dispatch(
                updateContact({
                    id: editingContact.id,
                    ...formData,
                }),
            )
        } else {
            dispatch(addContact(formData))
        }

        setFormData({
            fullName: "",
            email: "",
            phone: "",
        })
    }

    const handleCancel = () => {
        dispatch(setEditingContact(null))
        setFormData({
            fullName: "",
            email: "",
            phone: "",
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="fullname">Nome Completo</Label>
                <Input type="text" id='fullName' name='fullName' value={formData.fullName} onchange={handleChange} />
                {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
                <Label htmlFor="email">E-mail</Label>
                <Input type="email" id='email' name='email' value={formData.email} onchange={handleChange} />
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
                <Label htmlFor="phone">E-mail</Label>
                <Input type="phone" id='phone' name='phone' value={formData.phone} onchange={handleChange} />
                {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
            </FormGroup>

            <ButtonGroup>
                <Button type="submit" primary>
                    {editingContact ? "Atualizar Contato" : "Adicionar Contato"}
                </Button>
                {editingContact && (
                    <Button type="button" onClick={handleCancel}>
                        Cancelar
                    </Button>
                )}
            </ButtonGroup>
        </Form>
    )
}

export default ContactForm;