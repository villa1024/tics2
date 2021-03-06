PGDMP                         y         
   scchileapp    13.2    13.2      ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16394 
   scchileapp    DATABASE     f   CREATE DATABASE scchileapp WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE scchileapp;
                postgres    false            ?           0    0    DATABASE scchileapp    COMMENT     H   COMMENT ON DATABASE scchileapp IS 'base de datos para proyecto alarma';
                   postgres    false    3036            ?            1259    16407    alarma    TABLE     ?   CREATE TABLE public.alarma (
    id_alarm integer NOT NULL,
    id_veci character varying(10) NOT NULL,
    id_guard character varying(10) NOT NULL,
    id_fecha timestamp without time zone NOT NULL
);
    DROP TABLE public.alarma;
       public         heap    postgres    false            ?            1259    16423 
   comentario    TABLE     ?   CREATE TABLE public.comentario (
    id_alarm integer NOT NULL,
    com_veci text NOT NULL,
    com_guard text,
    id_coment integer NOT NULL
);
    DROP TABLE public.comentario;
       public         heap    postgres    false            ?            1259    16401    contacto    TABLE     ?   CREATE TABLE public.contacto (
    id_veci character varying(10) NOT NULL,
    numero character varying(12) NOT NULL,
    nom_numero character varying(30) NOT NULL,
    numero0 character varying(12),
    nom_numero0 character varying(30)
);
    DROP TABLE public.contacto;
       public         heap    postgres    false            ?            1259    16483    escolta    TABLE     ?   CREATE TABLE public.escolta (
    id_esco integer NOT NULL,
    id_veci character varying(10) NOT NULL,
    id_guard character varying(10) NOT NULL,
    fecha_esc date NOT NULL,
    hora_esc time without time zone NOT NULL
);
    DROP TABLE public.escolta;
       public         heap    postgres    false            ?            1259    16404    guardia    TABLE     ?   CREATE TABLE public.guardia (
    id_guard character varying(10) NOT NULL,
    guard_tipo character varying(6) NOT NULL,
    nom_guard text NOT NULL,
    pass_guard text NOT NULL
);
    DROP TABLE public.guardia;
       public         heap    postgres    false            ?            1259    16410    momento    TABLE     ?   CREATE TABLE public.momento (
    id_fecha timestamp without time zone NOT NULL,
    fecha_init timestamp without time zone NOT NULL,
    fecha_end timestamp without time zone NOT NULL,
    duracion timestamp without time zone
);
    DROP TABLE public.momento;
       public         heap    postgres    false            ?            1259    16398    vecino    TABLE     ?   CREATE TABLE public.vecino (
    id_veci character varying(10) NOT NULL,
    direccion character varying(30) NOT NULL,
    pass_veci text NOT NULL
);
    DROP TABLE public.vecino;
       public         heap    postgres    false            ?          0    16407    alarma 
   TABLE DATA           G   COPY public.alarma (id_alarm, id_veci, id_guard, id_fecha) FROM stdin;
    public          postgres    false    203   ?%       ?          0    16423 
   comentario 
   TABLE DATA           N   COPY public.comentario (id_alarm, com_veci, com_guard, id_coment) FROM stdin;
    public          postgres    false    205   ?%       ?          0    16401    contacto 
   TABLE DATA           U   COPY public.contacto (id_veci, numero, nom_numero, numero0, nom_numero0) FROM stdin;
    public          postgres    false    201   ?%       ?          0    16483    escolta 
   TABLE DATA           R   COPY public.escolta (id_esco, id_veci, id_guard, fecha_esc, hora_esc) FROM stdin;
    public          postgres    false    206   ?%       ?          0    16404    guardia 
   TABLE DATA           N   COPY public.guardia (id_guard, guard_tipo, nom_guard, pass_guard) FROM stdin;
    public          postgres    false    202   &       ?          0    16410    momento 
   TABLE DATA           L   COPY public.momento (id_fecha, fecha_init, fecha_end, duracion) FROM stdin;
    public          postgres    false    204   &       ?          0    16398    vecino 
   TABLE DATA           ?   COPY public.vecino (id_veci, direccion, pass_veci) FROM stdin;
    public          postgres    false    200   <&       @           2606    16416    alarma alarma_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.alarma
    ADD CONSTRAINT alarma_pkey PRIMARY KEY (id_alarm);
 <   ALTER TABLE ONLY public.alarma DROP CONSTRAINT alarma_pkey;
       public            postgres    false    203            D           2606    16522    comentario comentario_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.comentario
    ADD CONSTRAINT comentario_pkey PRIMARY KEY (id_coment);
 D   ALTER TABLE ONLY public.comentario DROP CONSTRAINT comentario_pkey;
       public            postgres    false    205            F           2606    16487    escolta escolta_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.escolta
    ADD CONSTRAINT escolta_pkey PRIMARY KEY (id_esco);
 >   ALTER TABLE ONLY public.escolta DROP CONSTRAINT escolta_pkey;
       public            postgres    false    206            >           2606    16482    guardia guardia_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.guardia
    ADD CONSTRAINT guardia_pkey PRIMARY KEY (id_guard);
 >   ALTER TABLE ONLY public.guardia DROP CONSTRAINT guardia_pkey;
       public            postgres    false    202            B           2606    16414    momento momento_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.momento
    ADD CONSTRAINT momento_pkey PRIMARY KEY (id_fecha);
 >   ALTER TABLE ONLY public.momento DROP CONSTRAINT momento_pkey;
       public            postgres    false    204            <           2606    16450    vecino vecino_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.vecino
    ADD CONSTRAINT vecino_pkey PRIMARY KEY (id_veci);
 <   ALTER TABLE ONLY public.vecino DROP CONSTRAINT vecino_pkey;
       public            postgres    false    200            J           2606    16511    alarma alarma_id_fecha_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.alarma
    ADD CONSTRAINT alarma_id_fecha_fkey FOREIGN KEY (id_fecha) REFERENCES public.momento(id_fecha) NOT VALID;
 E   ALTER TABLE ONLY public.alarma DROP CONSTRAINT alarma_id_fecha_fkey;
       public          postgres    false    203    204    2882            I           2606    16506    alarma alarma_id_guard_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.alarma
    ADD CONSTRAINT alarma_id_guard_fkey FOREIGN KEY (id_guard) REFERENCES public.guardia(id_guard) NOT VALID;
 E   ALTER TABLE ONLY public.alarma DROP CONSTRAINT alarma_id_guard_fkey;
       public          postgres    false    2878    203    202            H           2606    16501    alarma alarma_id_veci_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.alarma
    ADD CONSTRAINT alarma_id_veci_fkey FOREIGN KEY (id_veci) REFERENCES public.vecino(id_veci) NOT VALID;
 D   ALTER TABLE ONLY public.alarma DROP CONSTRAINT alarma_id_veci_fkey;
       public          postgres    false    200    203    2876            K           2606    16429 #   comentario comentario_id_alarm_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.comentario
    ADD CONSTRAINT comentario_id_alarm_fkey FOREIGN KEY (id_alarm) REFERENCES public.alarma(id_alarm);
 M   ALTER TABLE ONLY public.comentario DROP CONSTRAINT comentario_id_alarm_fkey;
       public          postgres    false    205    2880    203            G           2606    16516    contacto contacto_id_veci_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.contacto
    ADD CONSTRAINT contacto_id_veci_fkey FOREIGN KEY (id_veci) REFERENCES public.vecino(id_veci) NOT VALID;
 H   ALTER TABLE ONLY public.contacto DROP CONSTRAINT contacto_id_veci_fkey;
       public          postgres    false    200    201    2876            M           2606    16493    escolta escolta_id_guard_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.escolta
    ADD CONSTRAINT escolta_id_guard_fkey FOREIGN KEY (id_guard) REFERENCES public.guardia(id_guard);
 G   ALTER TABLE ONLY public.escolta DROP CONSTRAINT escolta_id_guard_fkey;
       public          postgres    false    202    206    2878            L           2606    16488    escolta escolta_id_veci_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.escolta
    ADD CONSTRAINT escolta_id_veci_fkey FOREIGN KEY (id_veci) REFERENCES public.vecino(id_veci);
 F   ALTER TABLE ONLY public.escolta DROP CONSTRAINT escolta_id_veci_fkey;
       public          postgres    false    2876    206    200            ?      x?????? ? ?      ?      x?????? ? ?      ?      x?????? ? ?      ?      x?????? ? ?      ?      x?????? ? ?      ?      x?????? ? ?      ?      x?????? ? ?     