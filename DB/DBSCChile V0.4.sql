PGDMP     0                    y            scchile    10.16    13.2 >    C           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            D           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            E           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            F           1262    16393    scchile    DATABASE     d   CREATE DATABASE scchile WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Mexico.1252';
    DROP DATABASE scchile;
                postgres    false            ?            1255    16497    set_duracion()    FUNCTION     ?   CREATE FUNCTION public.set_duracion() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
declare
begin

new.duracion := (new.fecha_end - new.fecha_init);

return new;
end;
$$;
 %   DROP FUNCTION public.set_duracion();
       public          postgres    false            ?            1259    16394    alarma    TABLE     ?   CREATE TABLE public.alarma (
    id_alarm integer NOT NULL,
    id_veci character varying(10) NOT NULL,
    id_guard character varying(10) NOT NULL,
    id_fecha integer NOT NULL
);
    DROP TABLE public.alarma;
       public            postgres    false            ?            1259    16397    alarma_id_alarm_seq    SEQUENCE     ?   CREATE SEQUENCE public.alarma_id_alarm_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.alarma_id_alarm_seq;
       public          postgres    false    196            G           0    0    alarma_id_alarm_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.alarma_id_alarm_seq OWNED BY public.alarma.id_alarm;
          public          postgres    false    197            ?            1259    16399    alarma_id_fecha_seq    SEQUENCE     ?   CREATE SEQUENCE public.alarma_id_fecha_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.alarma_id_fecha_seq;
       public          postgres    false    196            H           0    0    alarma_id_fecha_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.alarma_id_fecha_seq OWNED BY public.alarma.id_fecha;
          public          postgres    false    198            ?            1259    16401 
   comentario    TABLE     ?   CREATE TABLE public.comentario (
    id_coment integer NOT NULL,
    id_alarm integer NOT NULL,
    com_veci text NOT NULL,
    com_guard text
);
    DROP TABLE public.comentario;
       public            postgres    false            ?            1259    16407    comentario_id_alarm_seq    SEQUENCE     ?   CREATE SEQUENCE public.comentario_id_alarm_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.comentario_id_alarm_seq;
       public          postgres    false    199            I           0    0    comentario_id_alarm_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.comentario_id_alarm_seq OWNED BY public.comentario.id_alarm;
          public          postgres    false    200            ?            1259    16409    comentario_id_coment_seq    SEQUENCE     ?   CREATE SEQUENCE public.comentario_id_coment_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.comentario_id_coment_seq;
       public          postgres    false    199            J           0    0    comentario_id_coment_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.comentario_id_coment_seq OWNED BY public.comentario.id_coment;
          public          postgres    false    201            ?            1259    16411    contacto    TABLE     ?   CREATE TABLE public.contacto (
    id_veci character varying(10) NOT NULL,
    numero character varying(12) NOT NULL,
    nom_numero character varying(30) NOT NULL,
    numero0 character varying(12),
    nom_numero0 character varying(30)
);
    DROP TABLE public.contacto;
       public            postgres    false            ?            1259    16414    escolta    TABLE     ?   CREATE TABLE public.escolta (
    id_esco integer NOT NULL,
    id_veci character varying(10) NOT NULL,
    id_guard character varying(10) NOT NULL,
    fecha_esc date NOT NULL,
    hora_esc time without time zone NOT NULL
);
    DROP TABLE public.escolta;
       public            postgres    false            ?            1259    16417    escolta_id_esco_seq    SEQUENCE     ?   CREATE SEQUENCE public.escolta_id_esco_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.escolta_id_esco_seq;
       public          postgres    false    203            K           0    0    escolta_id_esco_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.escolta_id_esco_seq OWNED BY public.escolta.id_esco;
          public          postgres    false    204            ?            1259    16419    guardia    TABLE     ?   CREATE TABLE public.guardia (
    id_guard character varying(10) NOT NULL,
    guard_tipo character varying(7) NOT NULL,
    nom_guard text NOT NULL,
    pass_guard text NOT NULL
);
    DROP TABLE public.guardia;
       public            postgres    false            ?            1259    16425    incrementoid    SEQUENCE     u   CREATE SEQUENCE public.incrementoid
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.incrementoid;
       public          postgres    false            ?            1259    16427    momento    TABLE     ?   CREATE TABLE public.momento (
    id_fecha integer NOT NULL,
    fecha_init timestamp without time zone NOT NULL,
    fecha_end timestamp without time zone,
    duracion interval
);
    DROP TABLE public.momento;
       public            postgres    false            ?            1259    16430    momento_id_fecha_seq    SEQUENCE     ?   CREATE SEQUENCE public.momento_id_fecha_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.momento_id_fecha_seq;
       public          postgres    false    207            L           0    0    momento_id_fecha_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.momento_id_fecha_seq OWNED BY public.momento.id_fecha;
          public          postgres    false    208            ?            1259    16522    usuario_guardia    TABLE     s   CREATE TABLE public.usuario_guardia (
    id_guard text,
    tipo text,
    nom_guard text,
    pass_guard text
);
 #   DROP TABLE public.usuario_guardia;
       public            postgres    false            ?            1259    16494    usuarios    TABLE     ?   CREATE TABLE public.usuarios (
    nombre character varying(20),
    email character varying(20),
    password character varying(20)
);
    DROP TABLE public.usuarios;
       public            postgres    false            ?            1259    16432    vecino    TABLE     ?   CREATE TABLE public.vecino (
    id_veci character varying(10) NOT NULL,
    direccion character varying(30) NOT NULL,
    pass_veci text NOT NULL
);
    DROP TABLE public.vecino;
       public            postgres    false            ?
           2604    16528    alarma id_alarm    DEFAULT     r   ALTER TABLE ONLY public.alarma ALTER COLUMN id_alarm SET DEFAULT nextval('public.alarma_id_alarm_seq'::regclass);
 >   ALTER TABLE public.alarma ALTER COLUMN id_alarm DROP DEFAULT;
       public          postgres    false    197    196            ?
           2604    16529    alarma id_fecha    DEFAULT     r   ALTER TABLE ONLY public.alarma ALTER COLUMN id_fecha SET DEFAULT nextval('public.alarma_id_fecha_seq'::regclass);
 >   ALTER TABLE public.alarma ALTER COLUMN id_fecha DROP DEFAULT;
       public          postgres    false    198    196            ?
           2604    16530    comentario id_coment    DEFAULT     |   ALTER TABLE ONLY public.comentario ALTER COLUMN id_coment SET DEFAULT nextval('public.comentario_id_coment_seq'::regclass);
 C   ALTER TABLE public.comentario ALTER COLUMN id_coment DROP DEFAULT;
       public          postgres    false    201    199            ?
           2604    16531    comentario id_alarm    DEFAULT     z   ALTER TABLE ONLY public.comentario ALTER COLUMN id_alarm SET DEFAULT nextval('public.comentario_id_alarm_seq'::regclass);
 B   ALTER TABLE public.comentario ALTER COLUMN id_alarm DROP DEFAULT;
       public          postgres    false    200    199            ?
           2604    16532    escolta id_esco    DEFAULT     r   ALTER TABLE ONLY public.escolta ALTER COLUMN id_esco SET DEFAULT nextval('public.escolta_id_esco_seq'::regclass);
 >   ALTER TABLE public.escolta ALTER COLUMN id_esco DROP DEFAULT;
       public          postgres    false    204    203            ?
           2604    16533    momento id_fecha    DEFAULT     t   ALTER TABLE ONLY public.momento ALTER COLUMN id_fecha SET DEFAULT nextval('public.momento_id_fecha_seq'::regclass);
 ?   ALTER TABLE public.momento ALTER COLUMN id_fecha DROP DEFAULT;
       public          postgres    false    208    207            1          0    16394    alarma 
   TABLE DATA           G   COPY public.alarma (id_alarm, id_veci, id_guard, id_fecha) FROM stdin;
    public          postgres    false    196   F       4          0    16401 
   comentario 
   TABLE DATA           N   COPY public.comentario (id_coment, id_alarm, com_veci, com_guard) FROM stdin;
    public          postgres    false    199   gF       7          0    16411    contacto 
   TABLE DATA           U   COPY public.contacto (id_veci, numero, nom_numero, numero0, nom_numero0) FROM stdin;
    public          postgres    false    202   ?F       8          0    16414    escolta 
   TABLE DATA           R   COPY public.escolta (id_esco, id_veci, id_guard, fecha_esc, hora_esc) FROM stdin;
    public          postgres    false    203   MG       :          0    16419    guardia 
   TABLE DATA           N   COPY public.guardia (id_guard, guard_tipo, nom_guard, pass_guard) FROM stdin;
    public          postgres    false    205   ?G       <          0    16427    momento 
   TABLE DATA           L   COPY public.momento (id_fecha, fecha_init, fecha_end, duracion) FROM stdin;
    public          postgres    false    207   H       @          0    16522    usuario_guardia 
   TABLE DATA           P   COPY public.usuario_guardia (id_guard, tipo, nom_guard, pass_guard) FROM stdin;
    public          postgres    false    211   xH       ?          0    16494    usuarios 
   TABLE DATA           ;   COPY public.usuarios (nombre, email, password) FROM stdin;
    public          postgres    false    210   ?H       >          0    16432    vecino 
   TABLE DATA           ?   COPY public.vecino (id_veci, direccion, pass_veci) FROM stdin;
    public          postgres    false    209   I       M           0    0    alarma_id_alarm_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.alarma_id_alarm_seq', 3, true);
          public          postgres    false    197            N           0    0    alarma_id_fecha_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.alarma_id_fecha_seq', 1, false);
          public          postgres    false    198            O           0    0    comentario_id_alarm_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.comentario_id_alarm_seq', 1, false);
          public          postgres    false    200            P           0    0    comentario_id_coment_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.comentario_id_coment_seq', 2, true);
          public          postgres    false    201            Q           0    0    escolta_id_esco_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.escolta_id_esco_seq', 2, true);
          public          postgres    false    204            R           0    0    incrementoid    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.incrementoid', 1, false);
          public          postgres    false    206            S           0    0    momento_id_fecha_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.momento_id_fecha_seq', 6, true);
          public          postgres    false    208            ?
           2606    16445    alarma alarma_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.alarma
    ADD CONSTRAINT alarma_pkey PRIMARY KEY (id_alarm);
 <   ALTER TABLE ONLY public.alarma DROP CONSTRAINT alarma_pkey;
       public            postgres    false    196            ?
           2606    16447    comentario comentario_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.comentario
    ADD CONSTRAINT comentario_pkey PRIMARY KEY (id_coment);
 D   ALTER TABLE ONLY public.comentario DROP CONSTRAINT comentario_pkey;
       public            postgres    false    199            ?
           2606    16449    escolta escolta_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.escolta
    ADD CONSTRAINT escolta_pkey PRIMARY KEY (id_esco);
 >   ALTER TABLE ONLY public.escolta DROP CONSTRAINT escolta_pkey;
       public            postgres    false    203            ?
           2606    16451    guardia guardia_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.guardia
    ADD CONSTRAINT guardia_pkey PRIMARY KEY (id_guard);
 >   ALTER TABLE ONLY public.guardia DROP CONSTRAINT guardia_pkey;
       public            postgres    false    205            ?
           2606    16453    momento momento_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.momento
    ADD CONSTRAINT momento_pkey PRIMARY KEY (id_fecha);
 >   ALTER TABLE ONLY public.momento DROP CONSTRAINT momento_pkey;
       public            postgres    false    207            ?
           2606    16455    vecino vecino_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.vecino
    ADD CONSTRAINT vecino_pkey PRIMARY KEY (id_veci);
 <   ALTER TABLE ONLY public.vecino DROP CONSTRAINT vecino_pkey;
       public            postgres    false    209            ?
           2606    16456    alarma alarma_id_alarm_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.alarma
    ADD CONSTRAINT alarma_id_alarm_fkey FOREIGN KEY (id_veci) REFERENCES public.vecino(id_veci) NOT VALID;
 E   ALTER TABLE ONLY public.alarma DROP CONSTRAINT alarma_id_alarm_fkey;
       public          postgres    false    196    2736    209            ?
           2606    16461    alarma alarma_id_fecha_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.alarma
    ADD CONSTRAINT alarma_id_fecha_fkey FOREIGN KEY (id_fecha) REFERENCES public.momento(id_fecha) NOT VALID;
 E   ALTER TABLE ONLY public.alarma DROP CONSTRAINT alarma_id_fecha_fkey;
       public          postgres    false    196    2734    207            ?
           2606    16466    alarma alarma_id_guard_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.alarma
    ADD CONSTRAINT alarma_id_guard_fkey FOREIGN KEY (id_guard) REFERENCES public.guardia(id_guard) NOT VALID;
 E   ALTER TABLE ONLY public.alarma DROP CONSTRAINT alarma_id_guard_fkey;
       public          postgres    false    196    2732    205            ?
           2606    16471 #   comentario comentario_id_alarm_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.comentario
    ADD CONSTRAINT comentario_id_alarm_fkey FOREIGN KEY (id_alarm) REFERENCES public.alarma(id_alarm) NOT VALID;
 M   ALTER TABLE ONLY public.comentario DROP CONSTRAINT comentario_id_alarm_fkey;
       public          postgres    false    199    2726    196            ?
           2606    16476    contacto contacto_id_veci_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.contacto
    ADD CONSTRAINT contacto_id_veci_fkey FOREIGN KEY (id_veci) REFERENCES public.vecino(id_veci) NOT VALID;
 H   ALTER TABLE ONLY public.contacto DROP CONSTRAINT contacto_id_veci_fkey;
       public          postgres    false    202    2736    209            ?
           2606    16481    escolta escolta_id_guard_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.escolta
    ADD CONSTRAINT escolta_id_guard_fkey FOREIGN KEY (id_guard) REFERENCES public.guardia(id_guard) NOT VALID;
 G   ALTER TABLE ONLY public.escolta DROP CONSTRAINT escolta_id_guard_fkey;
       public          postgres    false    203    2732    205            ?
           2606    16486    escolta escolta_id_veci_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.escolta
    ADD CONSTRAINT escolta_id_veci_fkey FOREIGN KEY (id_veci) REFERENCES public.vecino(id_veci) NOT VALID;
 F   ALTER TABLE ONLY public.escolta DROP CONSTRAINT escolta_id_veci_fkey;
       public          postgres    false    209    2736    203            1   D   x?3??q47???rt70?4?2??0?4????L??A??`yS4???o?e?ƷD??	??qqq j?C      4   `   x???	?0??)????,????6-:??8???;??i??.?K?A??t%??"n? l14??4RVd??{?%?\=?6?,?5?;f? I?       7   f   x??0?4??65??4?05?46?L?Q?KM/??????[p&椗f??q?8?Z???M?M--?A??KR!?X???? M??/N?H??5@͏???? ?(w?      8   H   x?mʹ?0?X???ɖ??C@?_??B??1?ڇC?D?Z@!??a?k&?r>m?+?<l???~??      :   j   x?=ʽ
? ??ާ?	B?ۛ??\[>P??%X??9D?Y?j?6w?IkrYBR(?e(+??L??/?\cx????ty5??#@͈чtю"us?????ơ?Z?yk????#?      <   I   x?}˱?0?O???;!?	???
??qĆh?.TfQN??E,??}?c"?u??u?Մ?O]nf7???      @   Y   x?s704?L/M,J?L?ц?*F?*?*????U?&??^?Qe?Y??&?>??y?Ł?aFE??zٹ9?zY???E???~?%eޕ\1z\\\ ???      ?   .   x??*??L-I????rH?M???KN??442"????T?21z\\\ [W?      >   K   x??q47???I,VpL/??? ~YbN~Qb^Iz:?g????gqN?B@~QIjUijN?H,???,I*????? r'     