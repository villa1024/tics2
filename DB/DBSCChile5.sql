PGDMP     /                     y            scchile    13.2    13.2 @               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            	           1262    16660    scchile    DATABASE     c   CREATE DATABASE scchile WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Chile.1252';
    DROP DATABASE scchile;
                postgres    false            ?            1255    16661    set_duracion()    FUNCTION     ?   CREATE FUNCTION public.set_duracion() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
declare
begin

new.duracion := (new.fecha_end - new.fecha_init);

return new;
end;
$$;
 %   DROP FUNCTION public.set_duracion();
       public          postgres    false            ?            1259    16662    alarma    TABLE     ?   CREATE TABLE public.alarma (
    id_alarm integer NOT NULL,
    id_veci character varying(10) NOT NULL,
    id_guard character varying(10) NOT NULL,
    id_fecha integer NOT NULL
);
    DROP TABLE public.alarma;
       public         heap    postgres    false            ?            1259    16665    alarma_id_alarm_seq    SEQUENCE     ?   CREATE SEQUENCE public.alarma_id_alarm_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.alarma_id_alarm_seq;
       public          postgres    false    200            
           0    0    alarma_id_alarm_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.alarma_id_alarm_seq OWNED BY public.alarma.id_alarm;
          public          postgres    false    201            ?            1259    16667    alarma_id_fecha_seq    SEQUENCE     ?   CREATE SEQUENCE public.alarma_id_fecha_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.alarma_id_fecha_seq;
       public          postgres    false    200                       0    0    alarma_id_fecha_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.alarma_id_fecha_seq OWNED BY public.alarma.id_fecha;
          public          postgres    false    202            ?            1259    16669 
   comentario    TABLE     ?   CREATE TABLE public.comentario (
    id_coment integer NOT NULL,
    id_alarm integer NOT NULL,
    com_veci text NOT NULL,
    com_guard text
);
    DROP TABLE public.comentario;
       public         heap    postgres    false            ?            1259    16675    comentario_id_alarm_seq    SEQUENCE     ?   CREATE SEQUENCE public.comentario_id_alarm_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.comentario_id_alarm_seq;
       public          postgres    false    203                       0    0    comentario_id_alarm_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.comentario_id_alarm_seq OWNED BY public.comentario.id_alarm;
          public          postgres    false    204            ?            1259    16677    comentario_id_coment_seq    SEQUENCE     ?   CREATE SEQUENCE public.comentario_id_coment_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.comentario_id_coment_seq;
       public          postgres    false    203                       0    0    comentario_id_coment_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.comentario_id_coment_seq OWNED BY public.comentario.id_coment;
          public          postgres    false    205            ?            1259    16679    contacto    TABLE     ?   CREATE TABLE public.contacto (
    id_veci character varying(10) NOT NULL,
    numero character varying(12) NOT NULL,
    nom_numero character varying(30) NOT NULL,
    numero0 character varying(12),
    nom_numero0 character varying(30)
);
    DROP TABLE public.contacto;
       public         heap    postgres    false            ?            1259    16682    escolta    TABLE     ?   CREATE TABLE public.escolta (
    id_esco integer NOT NULL,
    id_veci character varying(10) NOT NULL,
    id_guard character varying(10) NOT NULL,
    fecha_esc date NOT NULL,
    hora_esc time without time zone NOT NULL
);
    DROP TABLE public.escolta;
       public         heap    postgres    false            ?            1259    16685    escolta_id_esco_seq    SEQUENCE     ?   CREATE SEQUENCE public.escolta_id_esco_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.escolta_id_esco_seq;
       public          postgres    false    207                       0    0    escolta_id_esco_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.escolta_id_esco_seq OWNED BY public.escolta.id_esco;
          public          postgres    false    208            ?            1259    16687    guardia    TABLE     ?   CREATE TABLE public.guardia (
    id_guard character varying(10) NOT NULL,
    guard_tipo character varying(7) NOT NULL,
    nom_guard text NOT NULL,
    pass_guard text NOT NULL
);
    DROP TABLE public.guardia;
       public         heap    postgres    false            ?            1259    16693    incrementoid    SEQUENCE     u   CREATE SEQUENCE public.incrementoid
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.incrementoid;
       public          postgres    false            ?            1259    16695    momento    TABLE     ?   CREATE TABLE public.momento (
    id_fecha integer NOT NULL,
    fecha_init timestamp without time zone NOT NULL,
    fecha_end timestamp without time zone,
    duracion interval
);
    DROP TABLE public.momento;
       public         heap    postgres    false            ?            1259    16698    momento_id_fecha_seq    SEQUENCE     ?   CREATE SEQUENCE public.momento_id_fecha_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.momento_id_fecha_seq;
       public          postgres    false    211                       0    0    momento_id_fecha_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.momento_id_fecha_seq OWNED BY public.momento.id_fecha;
          public          postgres    false    212            ?            1259    16700    usuario_guardia    TABLE     s   CREATE TABLE public.usuario_guardia (
    id_guard text,
    tipo text,
    nom_guard text,
    pass_guard text
);
 #   DROP TABLE public.usuario_guardia;
       public         heap    postgres    false            ?            1259    16768    usuario_vecino    TABLE     ?   CREATE TABLE public.usuario_vecino (
    id_veci text,
    direccion text,
    pass_veci text,
    numero text,
    nom_numero text,
    numero0 text,
    nom_numero0 text
);
 "   DROP TABLE public.usuario_vecino;
       public         heap    postgres    false            ?            1259    16706    usuarios    TABLE     ?   CREATE TABLE public.usuarios (
    nombre character varying(20),
    email character varying(20),
    password character varying(20)
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            ?            1259    16709    vecino    TABLE     ?   CREATE TABLE public.vecino (
    id_veci character varying(10) NOT NULL,
    direccion character varying(30) NOT NULL,
    pass_veci text NOT NULL
);
    DROP TABLE public.vecino;
       public         heap    postgres    false            X           2604    16715    alarma id_alarm    DEFAULT     r   ALTER TABLE ONLY public.alarma ALTER COLUMN id_alarm SET DEFAULT nextval('public.alarma_id_alarm_seq'::regclass);
 >   ALTER TABLE public.alarma ALTER COLUMN id_alarm DROP DEFAULT;
       public          postgres    false    201    200            Y           2604    16716    alarma id_fecha    DEFAULT     r   ALTER TABLE ONLY public.alarma ALTER COLUMN id_fecha SET DEFAULT nextval('public.alarma_id_fecha_seq'::regclass);
 >   ALTER TABLE public.alarma ALTER COLUMN id_fecha DROP DEFAULT;
       public          postgres    false    202    200            Z           2604    16717    comentario id_coment    DEFAULT     |   ALTER TABLE ONLY public.comentario ALTER COLUMN id_coment SET DEFAULT nextval('public.comentario_id_coment_seq'::regclass);
 C   ALTER TABLE public.comentario ALTER COLUMN id_coment DROP DEFAULT;
       public          postgres    false    205    203            [           2604    16718    comentario id_alarm    DEFAULT     z   ALTER TABLE ONLY public.comentario ALTER COLUMN id_alarm SET DEFAULT nextval('public.comentario_id_alarm_seq'::regclass);
 B   ALTER TABLE public.comentario ALTER COLUMN id_alarm DROP DEFAULT;
       public          postgres    false    204    203            \           2604    16719    escolta id_esco    DEFAULT     r   ALTER TABLE ONLY public.escolta ALTER COLUMN id_esco SET DEFAULT nextval('public.escolta_id_esco_seq'::regclass);
 >   ALTER TABLE public.escolta ALTER COLUMN id_esco DROP DEFAULT;
       public          postgres    false    208    207            ]           2604    16720    momento id_fecha    DEFAULT     t   ALTER TABLE ONLY public.momento ALTER COLUMN id_fecha SET DEFAULT nextval('public.momento_id_fecha_seq'::regclass);
 ?   ALTER TABLE public.momento ALTER COLUMN id_fecha DROP DEFAULT;
       public          postgres    false    212    211            ?          0    16662    alarma 
   TABLE DATA           G   COPY public.alarma (id_alarm, id_veci, id_guard, id_fecha) FROM stdin;
    public          postgres    false    200   ?H       ?          0    16669 
   comentario 
   TABLE DATA           N   COPY public.comentario (id_coment, id_alarm, com_veci, com_guard) FROM stdin;
    public          postgres    false    203   ?H       ?          0    16679    contacto 
   TABLE DATA           U   COPY public.contacto (id_veci, numero, nom_numero, numero0, nom_numero0) FROM stdin;
    public          postgres    false    206   YI       ?          0    16682    escolta 
   TABLE DATA           R   COPY public.escolta (id_esco, id_veci, id_guard, fecha_esc, hora_esc) FROM stdin;
    public          postgres    false    207   ?I       ?          0    16687    guardia 
   TABLE DATA           N   COPY public.guardia (id_guard, guard_tipo, nom_guard, pass_guard) FROM stdin;
    public          postgres    false    209   'J       ?          0    16695    momento 
   TABLE DATA           L   COPY public.momento (id_fecha, fecha_init, fecha_end, duracion) FROM stdin;
    public          postgres    false    211   ?J                  0    16700    usuario_guardia 
   TABLE DATA           P   COPY public.usuario_guardia (id_guard, tipo, nom_guard, pass_guard) FROM stdin;
    public          postgres    false    213   ?J                 0    16768    usuario_vecino 
   TABLE DATA           q   COPY public.usuario_vecino (id_veci, direccion, pass_veci, numero, nom_numero, numero0, nom_numero0) FROM stdin;
    public          postgres    false    216   ?K                 0    16706    usuarios 
   TABLE DATA           ;   COPY public.usuarios (nombre, email, password) FROM stdin;
    public          postgres    false    214   ?K                 0    16709    vecino 
   TABLE DATA           ?   COPY public.vecino (id_veci, direccion, pass_veci) FROM stdin;
    public          postgres    false    215   L                  0    0    alarma_id_alarm_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.alarma_id_alarm_seq', 3, true);
          public          postgres    false    201                       0    0    alarma_id_fecha_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.alarma_id_fecha_seq', 1, false);
          public          postgres    false    202                       0    0    comentario_id_alarm_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.comentario_id_alarm_seq', 1, false);
          public          postgres    false    204                       0    0    comentario_id_coment_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.comentario_id_coment_seq', 2, true);
          public          postgres    false    205                       0    0    escolta_id_esco_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.escolta_id_esco_seq', 2, true);
          public          postgres    false    208                       0    0    incrementoid    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.incrementoid', 1, false);
          public          postgres    false    210                       0    0    momento_id_fecha_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.momento_id_fecha_seq', 6, true);
          public          postgres    false    212            _           2606    16722    alarma alarma_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.alarma
    ADD CONSTRAINT alarma_pkey PRIMARY KEY (id_alarm);
 <   ALTER TABLE ONLY public.alarma DROP CONSTRAINT alarma_pkey;
       public            postgres    false    200            a           2606    16724    comentario comentario_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.comentario
    ADD CONSTRAINT comentario_pkey PRIMARY KEY (id_coment);
 D   ALTER TABLE ONLY public.comentario DROP CONSTRAINT comentario_pkey;
       public            postgres    false    203            c           2606    16726    escolta escolta_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.escolta
    ADD CONSTRAINT escolta_pkey PRIMARY KEY (id_esco);
 >   ALTER TABLE ONLY public.escolta DROP CONSTRAINT escolta_pkey;
       public            postgres    false    207            e           2606    16728    guardia guardia_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.guardia
    ADD CONSTRAINT guardia_pkey PRIMARY KEY (id_guard);
 >   ALTER TABLE ONLY public.guardia DROP CONSTRAINT guardia_pkey;
       public            postgres    false    209            g           2606    16730    momento momento_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.momento
    ADD CONSTRAINT momento_pkey PRIMARY KEY (id_fecha);
 >   ALTER TABLE ONLY public.momento DROP CONSTRAINT momento_pkey;
       public            postgres    false    211            i           2606    16732    vecino vecino_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.vecino
    ADD CONSTRAINT vecino_pkey PRIMARY KEY (id_veci);
 <   ALTER TABLE ONLY public.vecino DROP CONSTRAINT vecino_pkey;
       public            postgres    false    215            j           2606    16733    alarma alarma_id_alarm_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.alarma
    ADD CONSTRAINT alarma_id_alarm_fkey FOREIGN KEY (id_veci) REFERENCES public.vecino(id_veci) NOT VALID;
 E   ALTER TABLE ONLY public.alarma DROP CONSTRAINT alarma_id_alarm_fkey;
       public          postgres    false    215    200    2921            k           2606    16738    alarma alarma_id_fecha_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.alarma
    ADD CONSTRAINT alarma_id_fecha_fkey FOREIGN KEY (id_fecha) REFERENCES public.momento(id_fecha) NOT VALID;
 E   ALTER TABLE ONLY public.alarma DROP CONSTRAINT alarma_id_fecha_fkey;
       public          postgres    false    211    200    2919            l           2606    16743    alarma alarma_id_guard_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.alarma
    ADD CONSTRAINT alarma_id_guard_fkey FOREIGN KEY (id_guard) REFERENCES public.guardia(id_guard) NOT VALID;
 E   ALTER TABLE ONLY public.alarma DROP CONSTRAINT alarma_id_guard_fkey;
       public          postgres    false    200    209    2917            m           2606    16748 #   comentario comentario_id_alarm_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.comentario
    ADD CONSTRAINT comentario_id_alarm_fkey FOREIGN KEY (id_alarm) REFERENCES public.alarma(id_alarm) NOT VALID;
 M   ALTER TABLE ONLY public.comentario DROP CONSTRAINT comentario_id_alarm_fkey;
       public          postgres    false    203    200    2911            n           2606    16753    contacto contacto_id_veci_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.contacto
    ADD CONSTRAINT contacto_id_veci_fkey FOREIGN KEY (id_veci) REFERENCES public.vecino(id_veci) NOT VALID;
 H   ALTER TABLE ONLY public.contacto DROP CONSTRAINT contacto_id_veci_fkey;
       public          postgres    false    2921    215    206            o           2606    16758    escolta escolta_id_guard_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.escolta
    ADD CONSTRAINT escolta_id_guard_fkey FOREIGN KEY (id_guard) REFERENCES public.guardia(id_guard) NOT VALID;
 G   ALTER TABLE ONLY public.escolta DROP CONSTRAINT escolta_id_guard_fkey;
       public          postgres    false    207    2917    209            p           2606    16763    escolta escolta_id_veci_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.escolta
    ADD CONSTRAINT escolta_id_veci_fkey FOREIGN KEY (id_veci) REFERENCES public.vecino(id_veci) NOT VALID;
 F   ALTER TABLE ONLY public.escolta DROP CONSTRAINT escolta_id_veci_fkey;
       public          postgres    false    215    2921    207            ?   D   x?3??q47???rt70?4?2??0?4????L??A??`yS4???o?e?ƷD??	??qqq j?C      ?   `   x???	?0??)????,????6-:??8???;??i??.?K?A??t%??"n? l14??4RVd??{?%?\=?6?,?5?;f? I?       ?   f   x??0?4??65??4?05?46?L?Q?KM/??????[p&椗f??q?8?Z???M?M--?A??KR!?X???? M??/N?H??5@͏???? ?(w?      ?   H   x?mʹ?0?X???ɖ??C@?_??B??1?ڇC?D?Z@!??a?k&?r>m?+?<l???~??      ?   j   x?=ʽ
? ??ާ?	B?ۛ??\[>P??%X??9D?Y?j?6w?IkrYBR(?e(+??L??/?\cx????ty5??#@͈чtю"us?????ơ?Z?yk????#?      ?   I   x?}˱?0?O???;!?	???
??qĆh?.TfQN??E,??}?c"?u??u?Մ?O]nf7???          ?   x?5?;?0  й=s??DFPl$(
q)??`????M4?oyX?)9 Kҗ??_(QtMQ??|L?}??q???ʦ???#
+???n7??Z????TMab? ???p?????K?m??????A?G.i)?o?}?*Ֆ???{?[u????.?A?ע5?            x?????? ? ?         .   x??*??L-I????rH?M???KN??442"????T?21z\\\ [W?         K   x??q47???I,VpL/??? ~YbN~Qb^Iz:?g????gqN?B@~QIjUijN?H,???,I*????? r'     